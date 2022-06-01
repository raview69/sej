import React, { useState } from 'react'
import SearchList from './SearchList'
import SearchScrool from './SearchScrool'

const Search = ({ details }) => {
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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const searchBox = () => {
        if (searchShow) {
            return (
                <div
                    className="absolute border-2 border-black"
                    onClick={handleClick}
                >
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
            className=" sm:flex sm:items-center sm:justify-center text-lg lg:mx-16"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-center">
                <div className="">
                    <div className="flex ">
                        <input
                            className="border-y-2 border-l-2 w-52"
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
                    </div>
                    {searchBox()}
                </div>
            </div>
            <div className="pr-8 sm:pr-2 lg:pr-8  text-black">
                <button className="px-2 border-2 rounded-sm text-center">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Search
