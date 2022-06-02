import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './components/pagination/Pagination'
import Whitelist from './components/whitelist/Whitelist'
import CartList from './components/cart/CartList'
import Search from './components/search/Search'
import Category from './components/category/Category'

const App = () => {
    const [currentItem, setCurrentItems] = useState([])
    const [category, setCategory] = useState(1)
    const [itemCount, setItemCount] = useState(0)
    const [itemCart, setItemCart] = useState([])
    const [cartShow, setCartShow] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [indexPage, setIndexPage] = useState(0)
    const itemsPerPage = 12
    const [storeCategory, setStoreCategory] = useState([])

    useEffect(() => {
        const bookData = async () => {
            const endOffset = itemOffset + itemsPerPage
            const getData = await axios.get(
                `/fee-assessment-books/?categoryId=${category}&page=0&size=48`,
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
    }, [itemOffset, itemsPerPage, category])

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage
        setItemOffset(newOffset)
        setIndexPage(event.selected)
    }
    const handleSubmit = (e) => {
        const filteredCoin = currentItem.filter((item) => {
            return item.title.includes(e) || item.authors.includes(e)
        })
        setCurrentItems(filteredCoin)
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

    const handleCategoryClick = () => {
        setCategory(storeCategory[0])
        setStoreCategory((storeCategory.length = 0))
        setStoreCategory([])
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
                <div className="mx-2">
                    <button
                        className="border-2 px-3 py-1 rounded-lg mb-4 mt-4"
                        onClick={handleCartCloseClick}
                    >
                        Close
                    </button>
                    <CartList cartData={itemCart} />
                </div>
            ) : (
                <>
                    <div className="flex top-0 left-0 w-full h-20 mb-1 bg-white sticky justify-between items-center sm:px-10 shadow-md z-10 px-2">
                        <div className="sm:text-2xl">SEJBooks</div>
                        <div className="flex items-center justify-center">
                            <Search
                                details={currentItem}
                                onSubmit={handleSubmit}
                            />
                            <div
                                onClick={handleCartClick}
                                className=" -ml-10 sm:ml-10"
                            >
                                <Whitelist number={itemCount} />
                            </div>
                        </div>
                    </div>
                    <div onClick={handleCategoryClick} className="lg:mx-22">
                        <Category categoryList={storeCategory} />
                    </div>
                    <div onClick={handleClickCart} className="lg:mx-22">
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
