import React, { useState, useEffect } from "react";
import axios from "./axios";
import row from "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    },
  };
  // console.log(movies);
  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailer("");
    } else {
      if (movie.name) {
        console.log(movie.name);
        movieTrailer(movie.name)
          .then((url) => {
            console.log(url);
            const urlparams = new URLSearchParams(new URL(url).search);
            setTrailer(urlparams.get("v"));
          })
          .catch((error) => console.log(error));
      }
      else if (movie.title) {
        console.log(movie.title);
        movieTrailer(movie.title)
          .then((url) => {
            console.log(url);
            const urlparams = new URLSearchParams(new URL(url).search);
            setTrailer(urlparams.get("v"));
          })
          .catch((error) => console.log(error));
      }
      else if (movie.original_title) {
        console.log(movie.original_title);
        movieTrailer(movie.original_title)
          .then((url) => {
            console.log(url);
            const urlparams = new URLSearchParams(new URL(url).search);
            setTrailer(urlparams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleclick(movie);
            }}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
