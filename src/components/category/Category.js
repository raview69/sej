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
        <li key={index} className="mx-6 p-2 border-2 rounded-xl">
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
        <div className="flex items-center justify-center py-4">
            <ul className="flex text-sm">{dataList}</ul>
        </div>
    )
}

export default Category
