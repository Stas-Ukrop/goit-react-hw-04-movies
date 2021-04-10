import React from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "../MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((elem) => {
        return (
          <li key={elem.id} className="movie-card">
            <NavLink
              exact
              to={{
                pathname: `/movies/${elem.id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MovieCard item={elem} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array,
};
