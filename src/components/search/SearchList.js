import React from 'react'

const SearchList = ({ filteredCoin, filteredClick }) => {
    const filtered = filteredCoin.map((items, index) => (
        <li key={index} className="">
            <div
                className="flex"
                onClick={() => {
                    filteredClick.push([items.title])
                }}
            >
                <p>{items.title}</p>
            </div>
        </li>
    ))
    return (
        <div className="py-2 text-black w-52 cursor-pointer">
            <ul>{filtered}</ul>
        </div>
    )
}

export default SearchList
