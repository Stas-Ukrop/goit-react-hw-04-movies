import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axiosApi from "../servise/axiosApi";
import routes from "../routes";
import Cast from "../Cast";
import Reviews from "../Reviews";
import CardMovieDetails from "../CardMovieDetails";

// const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

class MovieDetails extends Component {
  state = { videoPage: {} };
  componentDidMount() {
    axiosApi.detailMovies(this.props.match.params.movieId).then((data) => {
      this.setState({
        videoPage: { ...data },
      });
    });
  }
  handleBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };
  render() {
    const key = Object.keys(this.state.videoPage).length;
    const { videoPage } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <button className="btn-back" onClick={this.handleBack}>
          come back
        </button>
        {/* <h1>страница фильма {this.props.match.params.movieId}</h1> */}
        <div>{key > 0 && <CardMovieDetails movie={videoPage} />}</div>
        <div>
          <h3>addition informations</h3>
          <ul>
            <li>
              <NavLink
                exact
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: location?.state?.from || "/",
                  },
                }}
                className="info-link"
                activeClassName="info-link-activ"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: location?.state?.from || "/",
                  },
                }}
                className="info-link"
                activeClassName="info-link-activ"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Route
            exact
            path={`${match.url}/cast`}
            render={(props) => {
              return <Cast {...props} id={match.params.movieId} />;
            }}
          />

          <Route
            exact
            path={`${this.props.match.url}/reviews`}
            render={(props) => {
              return (
                videoPage && <Reviews {...props} id={match.params.movieId} />
              );
            }}
          />
        </div>
      </>
    );
  }
}
export default MovieDetails;
