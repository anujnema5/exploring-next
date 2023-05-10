"use client"

import React, { useState } from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);

    return (
        <form action="" >
            <input  type="text" placeholder='search...' onChange={(e)=>{setSearchQuery(e.target.value)}} className='rounded-lg px-1 border-2 border-red-900' />
        </form>
    )
}

export default SearchBar