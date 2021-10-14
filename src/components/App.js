import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home'
import Comments from './Comments'
import VideoPage from './VideoPage'
import ReactLoading from 'react-loading';




function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <ReactLoading/>;
  }


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
