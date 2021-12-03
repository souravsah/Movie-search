import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { MovieContext } from '../../Context/Moviedata'
import { Searchbarcss } from './SearchBar.style'
const SearchBar = ({handleChange,handleClick,data}) => {
    let {dropdowndata} =useContext(MovieContext)
    return (
    <Searchbarcss action="" onSubmit={handleClick} >
        <input type="text" onChange={handleChange} value={data} />
        <button type="submit">Search</button>
    </Searchbarcss>
)
}

export default SearchBar
