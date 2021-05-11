import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title , fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //code
            const request = await axios.get(fetchURL);
            //console.log(request.data.results)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL])
    
    // console.log(isLargeRow);
    // console.table(movies)
    return (
        <div className="row">
            {/* title */}
            <h3>{title}</h3>
            {/* container => images */}
            <div className={"row__posters"}>
                {movies.map(movie => {
                    return <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow  ? "row__posterlarge" : ""}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
        </div>
    )
}

export default Row
