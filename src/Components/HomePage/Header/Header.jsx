import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import SearchBar from '../../../core/SearchBar/SearchBar'
import { Parent } from './Header.style'
import useFetchMovies from "../../../hooks/useFetchMovies"
import { MovieContext } from '../../../Context/Moviedata'
import DropdownBox from '../../../core/DropdownBox/DropdownBox'
const Header = () => {
    let history = useHistory()
    let {getSearchData,dropdowndata} = useContext(MovieContext);
    let [data,setdata]=useState( dropdowndata);
    useEffect(()=>{
        setdata(dropdowndata)

    },[dropdowndata])

    const handleClick = (e) =>{
        e.preventDefault();
        getSearchData(data)
        history.push("/search")

    }

    const handleChange = (e) =>{
        setdata((data)=>(e.target.value))
        getSearchData(data)
    }
    return (
        <Parent>
            <SearchBar handleChange={handleChange} handleClick={handleClick} data={data}/>
           <div>
           <DropdownBox/>
           </div>

        </Parent>
    )
}

export default Header
