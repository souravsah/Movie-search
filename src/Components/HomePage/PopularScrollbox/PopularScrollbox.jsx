import React,{useState} from 'react'
import ScrollBox from '../../../core/ScrollBox/ScrollBox'
import useFetchMovies from '../../../hooks/useFetchMovies';

const PopularScrollbox = () => {
    let [togglestreaming,settogglestreaming] = useState(true);
    let [toggleTv,settoggleTv] = useState(false);
    let [toggleRent,settoggleRent] = useState(false)
    let [toggleTheaters,settoggleTheaters] = useState(false)

    const handleStreaming = () =>{
        
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
