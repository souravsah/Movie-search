import React,{useState,useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';
import { fetchMovies } from '../../../api/movies';
import { MovieContext } from '../../../Context/Moviedata';
import Movieboxcontainer from '../../../core/Movieboxcontainer/Movieboxcontainer'
import ScrollBox from '../../../core/ScrollBox/ScrollBox';
import useFetchMovies from '../../../hooks/useFetchMovies';
import PopularScrollbox from '../PopularScrollbox/PopularScrollbox';
import { Parent } from './popular.style';
const Popular = () => {
    let {scrolldata}=useContext(MovieContext)
    let {movies:movies}=useFetchMovies(scrolldata.trim() || "popular");
    let [movie,setmovie]=useState([])

    useEffect(()=>{
        setmovie(movies)
    },[movies])
    return (
        <>
            <Parent>
            <h1>What's Popular</h1>
            <PopularScrollbox/>
            
            </Parent>
           <Movieboxcontainer movies={movie}/> 
        </>
    )
}

export default Popular
