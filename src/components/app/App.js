import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { navigation } from '../../constants/configs';
import NotFound from '../ui/not-found/NotFound';
import Details from '../movies/Details';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import List from '../movies/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App =()=> {
  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path={navigation.home} exact component={List} />
          <Route path={navigation.movie_details} component={Details} />
          <Route exact path={navigation.not_found} component={NotFound} />
          <Route path="*" render={({ location }) => <Redirect to={navigation.not_found} />} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
