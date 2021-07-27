import React from 'react';

import { Switch, Route, Router } from 'react-router-dom';
import history from './history';

import Home from './pages/Home/Home';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" exact component={Series} />
        <Route path="/movies" exact component={Movies} />
      </Switch>
      <Footer />
   </Router>
  );
}

export default App;
