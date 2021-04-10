import React, { useState } from "react";
import { Route } from "react-router-dom";
import AxiosApi from "../servise/axiosApi";
import MoviesList from "../MoviesList";
import "./Movies.module.css";
const MoviesPage = () => {
  const [querty, setQuerty] = useState("");
  const [massVideos, setMassVideos] = useState([]);
  const handlerClick = (value) => {
    AxiosApi.foundMovies(value).then((data) => {
      setMassVideos(data.results);
      console.log(massVideos);
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="що ти тут шукаєш)"
        onChange={(e) => {
          setQuerty(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          handlerClick(querty);
        }}
      >
        Отправить во cвояси
      </button>
      <Route
        to={`/movies?${querty}`}
        render={(props) => {
          return <MoviesList {...props} movies={massVideos} />;
        }}
      />
    </>
  );
};
export default MoviesPage;
