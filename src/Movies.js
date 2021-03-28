import React from "react";
import "./App.css";

export const Movies = ({ movie }) => {
  return (
    <div key={movie.id} className="wrap-movie">
      <div className="wrap-movie-1">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=" "
        />
      </div>
      <div className="wrap-movie-2">
        <div className="title-nota">
          <h1>{movie.title}</h1>
          <h2>{movie.vote_average}</h2>
        </div>

        <h3>Sinopse</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
