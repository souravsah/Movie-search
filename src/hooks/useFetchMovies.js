import axios from "axios";
import { API_KEY } from "../config/popularconfig";
import { useEffect, useReducer } from "react";
const BASE_URL={
    POPULAR_URL:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    FREE_TO_WATCH:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    ON_TV:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    RENT:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    TRENDING:{
        TRENDING_TODAY:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
        TRENDING_THIS_WEEK:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    },
    SEARCH_URL:`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`
}

const ACTION_TYPES={
    FETCHING_DATA:'FETCHING_DATA',
    INITIAL_REQUEST:'INITIAL_REQUEST',
    SEARCH_DATA:'SEARCH_DATA',
    ERROR:'ERROR'
}
const initialState={
    movies:[],
    loading:true,
    error:false
}
function reducer(state,action){
    switch(action.type){
        case ACTION_TYPES.FETCHING_DATA:
            return{...state,loading:true}
        case ACTION_TYPES.INITIAL_REQUEST:
            return{...state,loading:false,movies:action.payload}
        case ACTION_TYPES.SEARCH_DATA:
            return{...state,loading:false,movies:action.payload}
        default:
            return state
    }
}
const  useFetchMovies = (data="",query='') => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const fetchMovies = async (URL) =>{
        try {
            let movies =await axios.get(`${URL}`)
            dispatch({
                type:ACTION_TYPES.INITIAL_REQUEST,
                payload:movies.data.results
            })
        } catch (error) {
            console.log(error)
        }
}
    const searchmovies = async (URL) =>{
        const cancelToken1 =axios.CancelToken.source()
        try {
            let movies = await axios.get(`${URL}`,{cancelToken:cancelToken1.token})
            dispatch({
                type:ACTION_TYPES.SEARCH_DATA,
                payload:movies.data.results
            
            })

        } catch (err) {
            if(axios.isCancel((err))){
                console.log(err)
                return
            }
            dispatch({type:ACTION_TYPES.ERROR,payload:{error:err}})
        }
        return ()=>{
            cancelToken1.cancel();
        }

    }
    useEffect(()=>{
        if(data.trim()==="popular"){
            dispatch({type:ACTION_TYPES.FETCHING_DATA})
            fetchMovies(BASE_URL.POPULAR_URL)
        }
        if(data.trim()==="free"){
            dispatch({type:ACTION_TYPES.FETCHING_DATA})
            fetchMovies(BASE_URL.FREE_TO_WATCH)
        }
        if(data.trim()==="onTv"){
            dispatch({type:ACTION_TYPES.FETCHING_DATA})
            fetchMovies(BASE_URL.ON_TV)
        }
        if(data.trim()==="Rent"){
            dispatch({type:ACTION_TYPES.FETCHING_DATA})
            fetchMovies(BASE_URL.RENT)
        }
        if(data.trim()==="trendingtoday"){
            dispatch({type:ACTION_TYPES.FETCHING_DATA})
            fetchMovies(BASE_URL.TRENDING.TRENDING_TODAY)
        }
        if(data.trim()==="trendingthisweek"){
            dispatch({type:ACTION_TYPES.FETCHING_DATA})
            fetchMovies(BASE_URL.TRENDING.TRENDING_THIS_WEEK)
        }    
    },[data])
    useEffect(()=>{
        if(query.trim().length){
         dispatch({type:ACTION_TYPES.FETCHING_DATA})
         searchmovies(`${BASE_URL.SEARCH_URL}${query}&page=1&include_adult=false}`)   
        }

    },[query])
    return state;
}

export default useFetchMovies;