import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Pagination from './components/pagination/Pagination'
import Search from './components/search/Search'

const App = () => {
    const [currentItem, setCurrentItems] = useState([])
    const [itemSearch, setitemSearch] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [indexPage, setIndexPage] = useState(0)
    const itemsPerPage = 12

    useEffect(() => {
        const bookData = async () => {
            const endOffset = itemOffset + itemsPerPage
            const getData = await axios.get(
                '/fee-assessment-books/?categoryId=1&page=0&size=48',
                {
                    headers: {
                        'access-control-allow-origin': '*',
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    mode: 'no-cors',
                }
            )

            const dataGet = getData.data
            setCurrentItems(getData.data.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(dataGet.length / itemsPerPage))
            setitemSearch(dataGet)
        }
        bookData()
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage
        setItemOffset(newOffset)
        setIndexPage(event.selected)
    }

    return (
        <>
            <Search details={itemSearch} />
            <Pagination
                currentItem={currentItem}
                indexPage={indexPage}
                handlePageClick={handlePageClick}
                pageCount={pageCount}
            />
        </>
    )
}

export default App
