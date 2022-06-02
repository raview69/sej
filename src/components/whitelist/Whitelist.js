import React from 'react'

const Whitelist = ({ number }) => {
    return (
        <button className="flex items-center rounded-lg p-1 border-2 text-md sm:text-lg">
            <span className="px-2">Watchlist</span>
            <span className="py-0 px-2 rounded-full">{number}</span>
        </button>
    )
}

export default Whitelist
