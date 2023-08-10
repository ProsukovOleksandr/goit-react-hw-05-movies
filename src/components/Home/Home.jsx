import {getTrendingMovies} from "../Api"
import {useEffect, useState} from 'react';
const Home = () =>{
const[movies, setMovies] = useState([]);

    getTrendingMovies().then(data=>setMovies(data.results))
}
export default Home;