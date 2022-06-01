import React from 'react'
import axios from 'axios'

const Category = () => {
    const sejData = async () => {
        const getData = await axios.get(
            '/fee-assessment-books/?categoryId=1&page=0',
            {
                headers: {
                    'access-control-allow-origin': '*',
                    'Content-type': 'application/json; charset=UTF-8',
                },
                mode: 'no-cors',
            }
        )

        const dataGet = getData.data
        console.log(dataGet)
    }
    sejData()
    return (
        <div className="text-3xl">
            <div>Hallo kamu disana</div>
        </div>
    )
}

export default Category
