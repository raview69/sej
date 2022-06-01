import React, { useState } from 'react'
import { MyPagination } from './MyPagination'
import BookList from '../book/BookList'

const Pagintion = ({ currentItem, handlePageClick, pageCount }) => {
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
    return (
        <>
            {itemShow ? (
                <li className="w-56">
                    <div onClick={handleShowCloseClick}>Close</div>
                    <img src={itemClick[1]} />
                    <br />
                    <div>{itemClick[0]}</div>

                    <div>{itemClick[3]}</div>
                </li>
            ) : (
                <div onClick={handleShowClick}>
                    <BookList data={currentItem} storedItem={itemClick} />
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

export default Pagintion
