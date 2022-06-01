import React from 'react'

const BookItem = ({ books, itemClick }) => {
    const { title, cover_url, authors, description } = books

    return (
        <li className="w-56">
            <img src={cover_url} alt={title} />
            <div
                onClick={() => {
                    itemClick.push(title, cover_url, authors, description)
                }}
            >
                <div>{title}</div>
                <div>{authors}</div>
            </div>
        </li>
    )
}

export default BookItem
