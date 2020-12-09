import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Details from '../movies/Details';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import List from '../movies/List';
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
          <Route path="/" exact component={List} />
          <Route path="/movie/:movieId" component={Details} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
