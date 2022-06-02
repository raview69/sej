import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Category = ({ categoryList }) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        const sejData = async () => {
            const getData = await axios.get('/fee-assessment-categories', {
                headers: {
                    'access-control-allow-origin': '*',
                    'Content-type': 'application/json; charset=UTF-8',
                },
                mode: 'no-cors',
            })

            const dataGet = getData.data
            setCategory(dataGet)
        }
        sejData()
    }, [category])

    const dataList = category.map((items, index) => (
        <li
            key={index}
            className="mx-2 text-xs whitespace-nowrap px-3 py-1 my-2 md:mx-6 md:px-4 md:py-2 border-2 rounded-full"
        >
            <button
                onClick={() => {
                    categoryList.push(items.id)
                }}
            >
                {items.name}
            </button>
        </li>
    ))

    return (
        <div className="flex items-center justify-center text-sm md:py-4">
            <ul className="flex text-sm overflow-x-scroll">{dataList}</ul>
        </div>
    )
}

export default Category
