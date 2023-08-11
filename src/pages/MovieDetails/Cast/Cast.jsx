import {getMovieCredits} from "components/Api";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { CastItem } from "./CastItem";
const Cast = ()=>{
const[credits, setCredits] = useState([]);
const [error, setError] = useState(null);
const { movieId } = useParams();
useEffect(()=>{
    getMovieCredits(movieId).then(cast=>setCredits(cast)).catch(error => setError(error.message));
}, [movieId]);
    return (
        <div>
            {error !== null && <p>Oops, something went wrong... Error: {error}</p>}
            <ul>
            {credits.map(credit=><CastItem credit={credit} key={credit.cast_id} /> )}
            </ul>
        </div>
    )
}
export default Cast;