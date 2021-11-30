import React,{useEffect,useState} from 'react'
import { fetchFreetowatch } from '../../../api/movies'
import Movieboxcontainer from '../../../core/Movieboxcontainer/Movieboxcontainer'
import { Parent } from './Freetowatch.style'
import useFetchMovies from '../../../hooks/useFetchMovies'
const Freetowatch = () => {


    let {movies:movies} =  useFetchMovies("free")

    return (
        <>
        <Parent >
            <h1>Free to Watch</h1>
        </Parent>
            <Movieboxcontainer movies={movies}/>
            </>
        
    )
}

export default Freetowatch
