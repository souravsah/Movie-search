import React from 'react'
import { Box, ImgBox } from './Loading.style'
import img from '../../../Images/loading.svg'
const Loading = () => {
    return (
        <Box>
        <ImgBox>
        <img src={img} alt="" />
        </ImgBox>
        </Box>
    )
}

export default Loading
