import React from 'react'

const Whitelist = ({ number }) => {
    return (
        <button className="flex items-center rounded-lg py-2 px-3 ">
            <span className="px-2">Watchlist</span>
            <span className="border-2 py-1 px-3 rounded-full">{number}</span>
        </button>
    )
}

export default Whitelist
