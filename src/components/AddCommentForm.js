import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { postComment } from '../apis/commentApi';
import { useAuth0 } from "@auth0/auth0-react";



const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
  },
  submit: {
    marginLeft: 0
  },
  cardcontent: {
    paddingRight : "auto"
  }
}));



const AddCommentForm = ({parent,top,video,rerenderCallback,toggleForm}) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const { user } = useAuth0();


    const handleSubmit = e => {
      e.preventDefault();
      //console.log("test");
      var timestamp=new Date().toISOString().slice(0, 19).replace('T', ' ')+" UTC";
      var newComment = {
        id: null,
        author: user['https://namespace.com/username'],
        text: text,
        timestamp: timestamp, 
        parent: parent ? {id : parent} : null, 
        video: {watchID: video},
        replies:null,
        top: top,
      }
      postComment(newComment);
      rerenderCallback();
      setText('');
      toggleForm();
    };

    const { isAuthenticated } = useAuth0();


    return (
      <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardcontent}>
      <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            multiline
            fullWidth
            rows={4}
            variant={isAuthenticated ? "outlined" : "filled"}
            helperText={isAuthenticated ? "" : top ? "Sign in to leave a comment" : "Sign in to reply"}
            label="New Comment" 
            required 
            disabled = {!isAuthenticated} 
            value={text} 
            onChange={e => setText(e.target.value) 
            }
            inputProps={{ "data-testid": "commentText" }}
          />
          <CardActions disableSpacing>
               <Button variant="contained" className={classes.submit} disabled = {!isAuthenticated} type="submit">Submit</Button>
            </CardActions>
        </form>
      </CardContent>
    </Card>
      );
}

export default AddCommentForm;