import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SectionTitle from "./components/SectionTitle";
import MovieSearchBox from "./components/MovieSearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}s&apikey=426365d1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center my-3">
        <SectionTitle heading="Movies" />
        <MovieSearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
      <div className="row">
        <SectionTitle heading="Favorite Movies" />
      </div>
    </div>
  );
}
export default App;
