import React,{useContext, useEffect, useState} from 'react'
import { MovieContext } from '../../Context/Moviedata'
import useFetchMovies from '../../hooks/useFetchMovies'
import { Dropdownboxcss } from './Dropdownbox.style'
const DropdownBox = () => {
    let {searchdata}=useContext(MovieContext)
    let [value,setValue]=useState("");
    let {movies:movies}=useFetchMovies("",searchdata);
    let {getDropdata}=useContext(MovieContext)
    // console.log(movies)
    // console.log(searchdata)
    useEffect(()=>{
        getDropdata(value)

    },[value])
    console.log(value)
    const handleclick = (e) =>{
        setValue(e.target.textContent)
    }
    return (
        <Dropdownboxcss >
            {
               movies.length? movies.filter((item,idx)=>idx<4).map((item,idx)=>
                    (
                <li key={idx} onClick={handleclick}>{item.original_title}</li>)
                ):""
            }

        </Dropdownboxcss>
    )
}

export default DropdownBox
