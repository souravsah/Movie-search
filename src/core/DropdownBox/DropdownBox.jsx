import React,{useContext} from 'react'
import { MovieContext } from '../../Context/Moviedata'
import useFetchMovies from '../../hooks/useFetchMovies'
import { Dropdownboxcss } from './Dropdownbox.style'
const DropdownBox = () => {
    let {searchdata}=useContext(MovieContext)
    let {movies:movies}=useFetchMovies("",searchdata);

    return (
        <Dropdownboxcss >
            {
               movies.length? movies.map((item,idx)=>
                    (

                    
                <li key={idx}>{item.original_title}</li>)
                ):""
            }

        </Dropdownboxcss>
    )
}

export default DropdownBox
