import React from 'react'
import BookList from '../book/BookList'

const Pagintion = ({ currentItem, handlePageClick, pageCount, updateItem }) => {
    return (
        <>
            <BookList
                data={currentItem}
                handlePageClick={handlePageClick}
                pageCount={pageCount}
                itemCart={updateItem}
            />
        </>
    )
}

export default Pagintion
