import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title , fetchURL}) {
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
    
    return (
        <div className="row">
            {console.table(movies)}
            {/* title */}
            <h2>{title}</h2>
            {/* container => images */}
            <div className="row__posters">
                {movies.map(movie => {
                    return <img 
                    key={movie.id}
                    className="row__poster"
                    src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                })}
            </div>
        </div>
    )
}

export default Row
