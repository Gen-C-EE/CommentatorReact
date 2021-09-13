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
import VideoPage from './VideoPage'




function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/comments">
          <Comments video="rokGy0huYEA" top={true}/>
        </Route>
        <Route path="/video/:watchId">
          <VideoPage/>
        </Route>
      </Switch>
    </Router>//rokGy0huYEA
  );
}

export default App;
