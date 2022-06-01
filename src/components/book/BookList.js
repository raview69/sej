import React, { useState } from 'react'
import { MyPagination } from '../pagination/MyPagination'

const BookList = ({ data, handlePageClick, pageCount, itemCart }) => {
    const [itemClick, setItemClick] = useState([])
    const [itemShow, setItemShow] = useState(false)

    // const [selected, setSelected] = useState(false)

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
        <li key={index} className="w-56">
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
                <img src={items.cover_url} alt={items.title} />
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
                    className="border-2  py-2 text-black"
                >
                    Add to Watchlist
                </button>
            </div>
        </li>
    ))

    return (
        <>
            {itemShow ? (
                <div className="mx-52">
                    <div onClick={handleShowCloseClick}>Close</div>
                    <div className="flex items-center justify-center">
                        <img src={itemClick[1]} className="w-56 " />
                        <div className="">
                            <div>{itemClick[0]}</div>
                            <div>By: {itemClick[2]}</div>
                            <div>{itemClick[3]}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-center">
                        <ul className="grid gap-4 grid-cols-4 grid-rows-3">
                            {dataList}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center pb-10 dark:text-white">
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
