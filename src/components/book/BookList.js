import React from 'react'
import BookItem from './BookItem'

const BookList = ({ data, storedItem }) => {
    const dataList = data.map((items, index) => (
        <BookItem books={items} key={index} itemClick={storedItem} />
    ))
    return (
        <div className="flex items-center justify-center">
            <ul className="grid gap-4 grid-cols-4 grid-rows-3">{dataList}</ul>
        </div>
    )
}

export default BookList
