import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './components/pagination/Pagination'
import Whitelist from './components/whitelist/Whitelist'
import CartList from './components/cart/CartList'
import Search from './components/search/Search'

const App = () => {
    const [currentItem, setCurrentItems] = useState([])
    const [itemCount, setItemCount] = useState(0)
    const [itemCart, setItemCart] = useState([])
    const [cartShow, setCartShow] = useState(false)
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
        }
        bookData()
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage
        setItemOffset(newOffset)
        setIndexPage(event.selected)
    }

    const handleClickCart = () => {
        const newTodo = [...itemCart]
        setItemCart(newTodo)
        console.log(...itemCart)

        if (itemCart.length == 0) {
            setItemCount(0)
        } else {
            setItemCount(itemCart.length)
        }
    }

    const handleCartClick = () => {
        setCartShow(true)
    }

    const handleCartCloseClick = () => {
        setCartShow(false)
    }

    return (
        <>
            {cartShow ? (
                <>
                    <button onClick={handleCartCloseClick}>Close</button>
                    <CartList cartData={itemCart} />
                </>
            ) : (
                <>
                    <div className="flex top-0 left-0 w-full h-20 mb-4 justify-between items-center px-10 shadow-lg z-10">
                        <Search details={currentItem} />
                        <div onClick={handleCartClick}>
                            <Whitelist number={itemCount} />
                        </div>
                    </div>

                    <div onClick={handleClickCart}>
                        <Pagination
                            currentItem={currentItem}
                            indexPage={indexPage}
                            handlePageClick={handlePageClick}
                            pageCount={pageCount}
                            updateItem={itemCart}
                        />
                    </div>
                </>
            )}
        </>
    )
}

export default App
