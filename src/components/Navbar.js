
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from "@material-ui/icons/Search";

import MenuIcon from '@material-ui/icons/Menu';
import ModalDialog from './ModalDialog';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from './AuthenticationButton';
import { withStyles } from "@material-ui/core/styles";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom';


const theme = createTheme({
  palette: {
    //primary: pink,
    type: "dark"
  }
});


const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000
  },

  title: {
    marginRight: 10,
    //color: "yellow",
    width: "100%"
  },

  search: {
    marginLeft: 0,
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "90%"
  },

  toolbar: theme.mixins.toolbar,

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  auth: {
    paddingLeft: theme.spacing(2),
    marginRight: "auto",
  },
  notchedOutline: {
    borderColor: "white"
  },
  textColor:{
    color:'white'
}
}));


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [watchId, setWatchId] = useState("init");
  const history=useHistory();

  const classes = useStyles();


  const youtube_parser = (url) => {
    if(url=="") return "init";
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = String(url).match(regExp);
    return (match&&match[7].length==11) ? match[7] : "";
}


  const handleChange = (e) => {
    console.log(watchId);
    console.log(e.target.value);
    e.preventDefault();
    setInput(e.target.value);
    let parse = youtube_parser(e.target.value);
    setWatchId(parse);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    //console.log(e.target.value);
    if(watchId=="") return false;
    let url = `/video/${watchId}`;
    //console.log(url);
    history.push(url);
  }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { loginWithRedirect } = useAuth0();
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Commentator
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
              required
              size="small"
              onChange={handleChange}
              error = {watchId=="init" || watchId!="" ? false : true}
              variant="outlined"
              placeholder="Enter Youtube Link"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search style={{fill: "white"}}/>
                  </InputAdornment>
                ),
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.textColor
                }
              }}
              className={classes.search}
            />
          </form>
        <AuthenticationButton className={classes.auth}/>
      </Toolbar>
      <ModalDialog open={open} handleClose={handleClose} />
    </AppBar>
    </ThemeProvider>
  );
};

export default withStyles(useStyles, { withTheme: true }) (Navbar);
