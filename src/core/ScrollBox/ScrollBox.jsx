import React, { useRef, useState } from 'react'
import { Scroll } from './ScrollBox.style'
const ScrollBox = ({togglestreaming,toggleTv,toggleRent,toggleTheaters,handleStreaming,handleTv,handleRent,handleTheaters}) => {
    return (
        <Scroll toggleRent={toggleRent} 
                toggleTheaters={toggleTheaters} 
                toggleTv={toggleTv} 
                togglestreaming={togglestreaming}>        
            <div onClick={handleStreaming}>
                <p>Streaming</p>
            </div>
            <div onClick={handleTv}>
                <p>On TV</p>
            </div>
            <div onClick={handleRent}>
                <p>For Rent</p>
            </div>
            <div onClick={handleTheaters}>
                <p>In Theaters</p>
            </div>
        </Scroll>
    )
}

export default ScrollBox
