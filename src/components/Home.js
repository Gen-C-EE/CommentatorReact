import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';


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
