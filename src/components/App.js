import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home'





function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/bios">

        </Route>
        <Route exact path="/create-bio">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
