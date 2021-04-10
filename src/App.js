import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "./routes";
import AppBar from "./AppBar";

const HomePage = lazy(() =>
  import("./HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./Movies" /* webpackChunkName: "movies-page" */)
);
const MovieDetails = lazy(() =>
  import("./MovieDetails" /* webpackChunkName: "movieDetais-page" */)
);
const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Гружу так, що аж гай шумыть)</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
