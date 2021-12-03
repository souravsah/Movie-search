import React,{ createContext, useContext } from "react";
import { useReducer } from "react/cjs/react.development";
import Moviedatareducer from "./Moviedatareducer"
let initialState={
    searchdata:"",
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
 return (
     <MovieContext.Provider
        value={
            {
                searchdata:state.searchdata,
                getSearchData,

            }
        }
     >
         {children}
     </MovieContext.Provider>
 );
};