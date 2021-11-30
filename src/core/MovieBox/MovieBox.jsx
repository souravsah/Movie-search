import React from 'react'
import Moment from 'react-moment';
import { Box,ImgBox,Informationbox ,Circle} from './MovieBox.style';
const MovieBox = ({item,idx}) => {
    return (
        <Box key={idx} >
        <ImgBox>
        <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
        </ImgBox>
        <Informationbox>
            <h4>{item.title || item.original_name}</h4>
            <span>{item.release_date || item.first_air_date}</span>
        </Informationbox>
        <Circle>
            <h4>{item.vote_average *10}%</h4>
        </Circle>
        </Box>
    )
}

export default MovieBox
