import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'
// import movieTrailer from 'movie-trailer'

const opts = {
    height: '390',
    width: '98%',
    playerVars: {
      autoplay: 1,
    }
}

const base_url = "https://image.tmdb.org/t/p/original"


function Row({title , fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState("")

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

    const handleTrailer = async (movie) => {
        if(trailer) {
            setTrailer("")
        } else {
            // movieTrailer(movie?.name || "")
            // .then((url) => {
            //     const urlparamneeded = new URLSearchParams(new URL(url).search)
            //     setTrailer(urlparamneeded.get('v'));
            // })
            // .catch(error => console.log(error))

            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=a0ce23cdd4293b82d567d32400ac035a`
              );
              setTrailer(trailerurl.data.results[0]?.key);
            
        }
    }

    //console.log(trailer);
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
                    onClick={() => handleTrailer(movie)}
                    className={`row__poster ${isLargeRow  ? "row__posterlarge" : ""}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
            {trailer && <YouTube videoId={trailer} opts={opts} />} 
        </div>
    )
}

export default Row
