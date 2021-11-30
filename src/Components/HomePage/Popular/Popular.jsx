import React,{useState,useEffect} from 'react'
import { fetchMovies } from '../../../api/movies';
import Movieboxcontainer from '../../../core/Movieboxcontainer/Movieboxcontainer'
import ScrollBox from '../../../core/ScrollBox/ScrollBox';
import useFetchMovies from '../../../hooks/useFetchMovies';
import PopularScrollbox from '../PopularScrollbox/PopularScrollbox';
import { Parent } from './popular.style';
const Popular = () => {
    let {movies:movies}=useFetchMovies("popular");
    return (
        <>
            <Parent>
            <h1>What's Popular</h1>
            <PopularScrollbox/>
            
            </Parent>
           <Movieboxcontainer movies={movies}/> 
        </>
    )
}

export default Popular
