import React, { useState, useEffect } from "react";
import axiosApi from "../servise/axiosApi";
import { NavLink } from "react-router-dom";
import MovieCard from "../MovieCard";
import "./HomePage.module.css";

const HomePage = ({ location }) => {
  const [massMovies, setMassMovies] = useState([]);
  useEffect(() => {
    axiosApi.getPopularMovies().then((response) => {
      setMassMovies(response.results);
    });
  }, []);

  return (
    <>
      <h1>страница популярных фильмов</h1>
      <ul>
        {massMovies.map((movie) => {
          return (
            <li key={movie.id} className="movie-card">
              <NavLink
                exact
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <MovieCard item={movie} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default HomePage;
