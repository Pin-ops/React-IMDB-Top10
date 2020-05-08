import React from 'react';
import Header from './components/Header';
import { Switch, Route } from "react-router-dom";
import Home from "./routerComponents/Home";
import Movies from './routerComponents/Movies'
import Categories from './routerComponents/Categories'
import Top10 from './routerComponents/Top10'
import Page404 from './routerComponents/Page404'


function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path="/" component = { Home } />
          <Route path="/movies" component = { Movies } />
          <Route path="/categories" component = { Categories } />
          <Route path="/top10" component = { Top10 } />
          <Route component = { Page404 } />

        </Switch>

    </div>
  );
}

export default App;
