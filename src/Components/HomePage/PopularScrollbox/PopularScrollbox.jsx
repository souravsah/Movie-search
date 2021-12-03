import React,{useState} from 'react'
import { useContext, useEffect } from 'react/cjs/react.development';
import { MovieContext } from '../../../Context/Moviedata';
import ScrollBox from '../../../core/ScrollBox/ScrollBox'
import useFetchMovies from '../../../hooks/useFetchMovies';

const PopularScrollbox = () => {
    let {getScrolldata} = useContext(MovieContext)
    let [data,settoggleData]=useState("popular")
    let [togglestreaming,settogglestreaming] = useState(true);
    let [toggleTv,settoggleTv] = useState(false);
    let [toggleRent,settoggleRent] = useState(false)
    let [toggleTheaters,settoggleTheaters] = useState(false)

    useEffect(()=>{
        getScrolldata(data)
    },[data])
    const handleStreaming = () =>{
        settoggleData("popular")
        settogglestreaming(true)
        if(toggleTv===true){
            settoggleTv(false)
        }
        if(toggleRent===true){
            settoggleRent(false)
        }
        if(toggleTheaters===true){
            settoggleTheaters(false)
    }
    
}
const handleTv = () =>{
    settoggleData("onTv")

    settoggleTv(true)
    if(togglestreaming===true){
        settogglestreaming(false)
    }
    if(toggleRent===true){
        settoggleRent(false)
    }
    if(toggleTheaters===true){
        settoggleTheaters(false)
}


}
const handleRent = () =>{
    settoggleRent(true)
    settoggleData("Rent")

    if(togglestreaming===true){
        settogglestreaming(false)
    }
    if(toggleTv===true){
        settoggleTv(false)
    }
    if(toggleTheaters===true){
        settoggleTheaters(false)
}


}
const handleTheaters = () =>{
    settoggleTheaters(true)
    settoggleData("free")

    if(togglestreaming===true){
        settogglestreaming(false)
    }
    if(toggleRent===true){
        settoggleRent(false)
    }
    if(toggleTv===true){
        settoggleTv(false)
}


}


    return (
        <>
         <ScrollBox
             togglestreaming={togglestreaming}
             toggleTv={toggleTv}
             toggleRent={toggleRent}
             toggleTheaters={toggleTheaters}
             handleStreaming={handleStreaming}
             handleTv={handleTv}
             handleRent={handleRent}
             handleTheaters={handleTheaters}

         />   
        </>
    )
}

export default PopularScrollbox
