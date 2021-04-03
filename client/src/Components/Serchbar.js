import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Serchbar = () => {
    return (
        <div>
        
            <form className="searchBar">
                <input type="text" placeholder="Search.." name="search" />
                <button className="searchIcon" type="submit">
                    <HiOutlineSearch></HiOutlineSearch>
                </button>
            </form>
        </div>
    )
}

export default Serchbar
