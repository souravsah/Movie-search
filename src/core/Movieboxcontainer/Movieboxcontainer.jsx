import React,{useState,useEffect} from 'react'
import Loading from '../../Components/HomePage/Loading/Loading'
import MovieBox from '../MovieBox/MovieBox'
import { Parent } from './Movieboxcontainer.style'
const Movieboxcontainer = ({movies}) => {
    
    return (
        <Parent>
            {
               movies.length? movies.map((item,idx)=>
                    (

                    
                <MovieBox item={item} />)
                ):new Array(10).fill(0).map((item,idx)=><Loading/>) 
            }
        </Parent>
    )
}

export default Movieboxcontainer
