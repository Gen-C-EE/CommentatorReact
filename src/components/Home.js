import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import ModalDialog from './ModalDialog'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal'

const Home = () => {


        // declare a new state variable for modal open
        const [open, setOpen] = useState(false);

        // function to handle modal open
        const handleOpen = () => {
          setOpen(true);
        };
      
        // function to handle modal close
        const handleClose = () => {
          setOpen(false);
        };
      
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React !!!
                </a>
            </header>

        </div>
        
    );
}

export default Home;
