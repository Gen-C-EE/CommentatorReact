import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home'
import Comments from './Comments'




function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/comments">
        <Comments video="watchid" top={true}/>
        </Route>
        <Route exact path="/create-bio">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
