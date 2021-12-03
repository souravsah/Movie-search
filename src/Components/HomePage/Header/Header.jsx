import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import SearchBar from '../../../core/SearchBar/SearchBar'
import { Parent } from './Header.style'
import useFetchMovies from "../../../hooks/useFetchMovies"
import { MovieContext } from '../../../Context/Moviedata'
import DropdownBox from '../../../core/DropdownBox/DropdownBox'
const Header = () => {
    let history = useHistory()
    let [data,setdata]=useState("");
    let {getSearchData} = useContext(MovieContext);
    const handleClick = (e) =>{
        e.preventDefault();
        history.push("/search")

    }
    const handleChange = (e) =>{
        setdata(e.target.value)
        getSearchData(data)
    }
    return (
        <Parent>
            <SearchBar handleChange={handleChange} handleClick={handleClick}/>
           <div>
           <DropdownBox/>
           </div>

        </Parent>
    )
}

export default Header
