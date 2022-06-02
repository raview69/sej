import React, { useState } from 'react'
import { MyPagination } from '../pagination/MyPagination'

const BookList = ({ data, handlePageClick, pageCount, itemCart }) => {
    const [itemClick, setItemClick] = useState([])
    const [itemShow, setItemShow] = useState(false)

    const handleShowClick = () => {
        setItemClick(itemClick)
        console.log(itemClick)
        setItemShow(true)
    }

    const handleShowCloseClick = () => {
        setItemShow(false)
        setItemClick((itemClick.length = 0))
        setItemClick([])
    }

    const dataList = data.map((items, index) => (
        <li key={index} className="px-2 sm:w-56">
            <div
                onClick={() => {
                    itemClick.push(
                        items.title,
                        items.cover_url,
                        items.authors,
                        items.description
                    )
                    handleShowClick()
                }}
            >
                <img
                    src={items.cover_url}
                    alt={items.title}
                    className="cursor-pointer"
                />
                <div className="">{items.title}</div>
                <div className="text-sm font-extralight">
                    By: {items.authors}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    onClick={() => {
                        itemCart.push([
                            items.title,
                            items.cover_url,
                            items.authors,
                            items.description,
                        ])
                    }}
                    className="border-2 py-1 px-2 text-black rounded-md mt-2"
                >
                    Add to Watchlist
                </button>
            </div>
        </li>
    ))

    return (
        <>
            {itemShow ? (
                <div className="px-2 lg:mx-52">
                    <button
                        onClick={handleShowCloseClick}
                        className="border-2 px-3 py-1 rounded-lg mb-4"
                    >
                        Back
                    </button>
                    <div className="flex items-center justify-center">
                        <img src={itemClick[1]} className="w-40 sm:w-56" />
                        <div className="ml-4">
                            <div className="text-lg font-bold">
                                {itemClick[0]}
                            </div>
                            <div className="py-2 font-extralight">
                                By: {itemClick[2]}
                            </div>
                            <div className="font-extralight">
                                Description: {itemClick[3]}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-center">
                        <ul className="grid gap-4 grid-cols-2 grid-rows-5 lg:gap-4 lg:grid-cols-4 lg:grid-rows-3 sm:grid-cols-3 sm:grid-rows-3 sm:gap-4">
                            {dataList}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center pb-10">
                        <MyPagination
                            breakLabel="..."
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={4}
                            marginPagesDisplayed={1}
                            pageCount={pageCount}
                            previousLabel="< Prev"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default BookList
