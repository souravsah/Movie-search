import React from 'react'
import { Information, MovieinfoBoxcss, MovieInfoImg } from './MovieInfoBox.style'
const MovieInfoBox = ({item,idx}) => {
    console.log(item)
    return (
        <MovieinfoBoxcss key={idx}>
            <MovieInfoImg>
                <img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path}`} alt="" />
            </MovieInfoImg>
            <Information>
                <h3>{item.original_title}</h3>
                <h4>{item.release_date}</h4>
                <p>{item.overview.substring(0,70)}</p>
            </Information>
        </MovieinfoBoxcss>
    )
}

export default MovieInfoBox
