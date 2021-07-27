import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" exact component={Series} />
        <Route path="/movies" exact component={Movies} />
      </Switch>
      <Footer />
   </BrowserRouter>
  );
}

export default App;
