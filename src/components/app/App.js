import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import DetailsMovie from '../DetailsMovie';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Home from '../Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App =()=> {
  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path={`/movie/:movieId`}>
            <DetailsMovie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;