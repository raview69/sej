import React, { useState } from 'react'
import SearchList from './SearchList'
import SearchScrool from './SearchScrool'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = ({ details, onSubmit }) => {
    const [searchField, setSearchField] = useState('')
    const [searchShow, setSearchShow] = useState(false)
    const [searchAsuk, setSearchAsuk] = useState([])

    const filteredCoin = details.filter((item) => {
        return (
            item.title.includes(searchField) ||
            item.authors.includes(searchField)
        )
    })

    const handleChange = (e) => {
        setSearchField(e.target.value)
        if (e.target.value === '') {
            setSearchShow(false)
        } else {
            setSearchShow(true)
        }
    }

    const handleClick = () => {
        setSearchField(searchAsuk[0])
        setSearchShow(false)
    }

    const handleClickClear = () => {
        setSearchAsuk((searchAsuk.length = 0))
        setSearchAsuk([])
        setSearchField('')
        window.location.reload()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(searchField)
    }

    const searchBox = () => {
        if (searchShow) {
            return (
                <div className="absolute bg-white p-2" onClick={handleClick}>
                    <SearchScrool>
                        <SearchList
                            filteredCoin={filteredCoin}
                            filteredClick={searchAsuk}
                        />
                    </SearchScrool>
                </div>
            )
        }
    }

    return (
        <form
            className="flex items-center justify-center sm:text-lg lg:mx-16 text-md"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-center">
                <div className="">
                    <div className="flex">
                        <input
                            className="w-32 border-y-2 border-l-2 sm:w-52 focus:outline-none"
                            type="text"
                            placeholder="Search your books"
                            value={searchField}
                            onChange={handleChange}
                        />
                        <button
                            className="border-y-2 w-4"
                            onClick={handleClickClear}
                        >
                            X
                        </button>
                        <button className="px-2 border-2 rounded-sm text-center sm:hidden">
                            <AiOutlineSearch />
                        </button>
                    </div>

                    {searchBox()}
                </div>
            </div>
            <div className="sm:pr-2 lg:pr-8  text-black">
                <button className="invisible sm:visible sm:px-2 sm:border-2 sm:rounded-sm sm:text-center ">
                    Search
                </button>
            </div>
        </form>
    )
}

export default Search
