import React, { useState, useEffect } from "react";
// import { useFetch } from "./useFetch";

export const Header = ({
  getTopMovies,
  getRentMovies,
  setMovies,
  API_KEY,
  API_URL
}) => {
  const [buscar, setBuscar] = useState("");
  const [query, setQuery] = useState();
  const API_queryMOvies = `${API_URL}search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    if (query) {
      getMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getMovies = async () => {
    if (query) {
      const response = await fetch(API_queryMOvies);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    }
  };

  const updateBuscar = e => {
    setBuscar(e.target.value);
  };

  const getBuscar = e => {
    e.preventDefault();
    setQuery(buscar);
    setBuscar("");
  };

  return (
    <header>
      <h1 className="title">Movies / Puidores Tech</h1>

      <form onSubmit={getBuscar} className="buscar-form">
        <input
          type="text"
          placeholder="Pesquisar filmes"
          className="buscar-bar"
          value={buscar}
          onChange={updateBuscar}
        />
        <button className="buscar-btn">Buscar</button>
      </form>

      <button className="topMovies-btn" onClick={getTopMovies}>
        TOP Movies
      </button>
      <button className="topMovies-btn" onClick={getRentMovies}>
        Mais Rentáveis
      </button>
    </header>
  );
};
