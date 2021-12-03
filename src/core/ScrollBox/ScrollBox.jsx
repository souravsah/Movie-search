import React, { useRef, useState } from 'react'
import { Scroll } from './ScrollBox.style'
const ScrollBox = ({togglestreaming,toggleTv,toggleRent,toggleTheaters,handleStreaming,handleTv,handleRent,handleTheaters}) => {
    let [toggle,settoggle]=useState(false);
    let [data,setdata]=useState("Streaming");
    const handleclick = () =>{
        settoggle(!toggle)
    }
    const handleclick1 = (e) =>{
        settoggle(false)
        setdata(e.target.textContent)
    }
    return (
        <Scroll toggleRent={toggleRent}
                toggleTheaters={toggleTheaters} 
                toggleTv={toggleTv} 
                togglestreaming={togglestreaming}
                toggle={toggle}
                >
                <div onClick={handleclick}>{data}</div>        
            <div onClick={(e)=>{
                handleStreaming()
                handleclick1(e)
                }}
                

            >
                <p>Streaming</p>
            </div>
            <div onClick={(e)=>{
                handleTv()
                handleclick1(e)
            }}>
                <p>On TV</p>
            </div>
            <div onClick={(e)=>{
                handleRent()
                handleclick1(e)
                }}>
                <p>For Rent</p>
            </div>
            <div onClick={(e)=>{
                handleTheaters()
                handleclick1(e)
            }}>
                <p>In Theaters</p>
            </div>
        </Scroll>
    )
}

export default ScrollBox
