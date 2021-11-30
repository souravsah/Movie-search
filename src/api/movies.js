import axios from "axios";
import { API_KEY } from "../config/popularconfig";

const POPULAR_URL='https://www.themealdb.com/api/json/v1/1/search.php?s='


export const fetchMovies = async () =>{
    try {
        let movies =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        return movies.data.results
    } catch (error) {
        console.log(error)
    }
}
export const fetchFreetowatch = async () =>{
    try {
        let free=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        return free.data.results
    } catch (error) {
        console.log(error)
    }
}