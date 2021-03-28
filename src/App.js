import React, { useState } from "react";
import "./App.css";
import { Movies } from "./Movies";
import { Header } from "./Header.js";
import { useFetch } from "./useFetch";

function App() {
  const API_KEY = "28024f875c84b3125293f69f7fdda8e0";
  const API_URL = "https://api.themoviedb.org/3/";

  const [movies, setMovies] = useState([]);

  const API_topMovies = `${API_URL}trending/movie/week?api_key=${API_KEY}&language=pt-BR`;
  const API_rentMovies = `${API_URL}discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=revenue.desc&include_adult=false&include_video=false&page=1`;

  const response_top = useFetch(API_topMovies);
  const getTopMovies = () => {
    setMovies(response_top);
    console.log(response_top);
  };

  const response_rent = useFetch(API_rentMovies);
  const getRentMovies = () => {
    setMovies(response_rent);
    console.log(response_rent);
  };

  return (
    <div className="App">
      <Header
        getTopMovies={getTopMovies}
        getRentMovies={getRentMovies}
        setMovies={setMovies}
        API_KEY={API_KEY}
        API_URL={API_URL}
      />

      <div className="all-movies">
        {movies.map((movie) => (
          <Movies movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
