import React from 'react'
import Movieboxcontainer from '../../../core/Movieboxcontainer/Movieboxcontainer'
import useFetchMovies from '../../../hooks/useFetchMovies'
import { Parent,Trending1 } from './Trending.style'
const Trending = () => {
    let {movies:movies} =  useFetchMovies("trendingtoday")
    console.log(movies)
    return (
        <Trending1>
         <Parent>
             <h1>Trending</h1>
         </Parent>   
         <Movieboxcontainer movies={movies}/>
        </Trending1>
    )
}

export default Trending
