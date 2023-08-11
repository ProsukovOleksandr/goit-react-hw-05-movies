import axios from 'axios';

const KEY = '4e3245caeda8ef69d01617b402f558a4';
const BASE_URL = `https://api.themoviedb.org/3`;

export const getTrendingMovies = async () => {
    const TRENDING_URL = `${BASE_URL}/trending/movie/day?api_key=${KEY}`;

    try {
        const response = await axios.get(TRENDING_URL);
        return response.data;
    } catch (error) {
        alert("Oops, something went wrong...");
    }
};

export const getQuerry = async (query) => {
    const QUERRY_URL = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`

    try {
        const response = await axios.get(QUERRY_URL);
        return response.data;
    } catch (error) {
        alert("Oops, something went wrong...");
    }
};

export const getMovieDetails = async (id) => {
    const MOVIE_DETAILS_URL = `${BASE_URL}/movie/${id}?api_key=${KEY}`;

    try {
        const response = await axios.get(MOVIE_DETAILS_URL);
        return response.data;
    } catch (error) {
        alert("Oops, something went wrong...")
    }
};

export const getMovieCredits = async (id) => {
    const MOVIE_CREDITS_URL = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`;

    try {
        const response = await axios.get(MOVIE_CREDITS_URL);
        return response.data.cast;
    } catch (error) {
        alert("Oops, something went wrong...")
    }
};

export const getMovieReview = async (id) => {
    const MOVIE_REVIEW_URL = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`;
    
    try {
        const response = await axios.get(MOVIE_REVIEW_URL);
        return response.data.results;
    } catch (error) {
        alert("Oops, something went wrong...")
    }
};