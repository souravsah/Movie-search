import React,{ createContext, useContext } from "react";
import { useReducer } from "react/cjs/react.development";
import Moviedatareducer from "./Moviedatareducer"
let initialState={
    searchdata:"",
    dropdowndata:"",
    scrolldata:"",
}
export const MovieContext = createContext(initialState)

export const MoviedataProvider = ({children}) =>{
const [state,dispatch]=useReducer(Moviedatareducer,initialState);
const getSearchData = (data) =>{
    dispatch({
        type:"GET_SEARCH_DATA",
        payload:data
    })
}
const getDropdata = (data) =>{
    dispatch({
        type:"GET_DROPDOWN_DATA",
        payload:data
    })
}
const getScrolldata = (data) =>{
dispatch({
    type:"GET_SCROLL_DATA",
    payload:data
})
}
 return (
     <MovieContext.Provider
        value={
            {
                searchdata:state.searchdata,
                dropdowndata:state.dropdowndata,
                scrolldata:state.scrolldata,
                getSearchData,
                getDropdata,
                getScrolldata

            }
        }
     >
         {children}
     </MovieContext.Provider>
 );
};