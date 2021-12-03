import React from 'react'
import { Searchbarcss } from './SearchBar.style'
const SearchBar = ({handleChange,handleClick}) => {
    return (
    <Searchbarcss action="" onSubmit={handleClick} >
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
    </Searchbarcss>
)
}

export default SearchBar
