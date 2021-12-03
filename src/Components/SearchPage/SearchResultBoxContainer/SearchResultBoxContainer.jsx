import React, { useContext } from 'react'
import { MovieContext } from '../../../Context/Moviedata'
import useFetchMovies from '../../../hooks/useFetchMovies'
import MovieInfoBox from '../MovieInfoBox/MovieInfoBox'
import { Css } from './SearchResultBoxConatiner.style'
const SearchResultBoxContainer = () => {
    let {searchdata}=useContext(MovieContext)
    let {movies:movies}=useFetchMovies("",searchdata);
    return (
        <Css>
            {
               movies.length? movies.map((item,idx)=>
                    (

                    
                <MovieInfoBox item={item} idx={idx}/>)
                ):<h1>Loading</h1>
            }



        </Css>
    )
}

export default SearchResultBoxContainer
