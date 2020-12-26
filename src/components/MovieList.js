import React from "react";

function MovieList(props) {
  const movies = props.movies;
  return (
    <>
      {movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movie" />
          <div className="overlay d-flex justify-content-center align-item-center">
            {/* <FavouriteComponent /> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
