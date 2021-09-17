import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';


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



const AddCommentForm = () => {
    const classes = useStyles();
    const [text, setText] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      console.log(text);
    };

    return (
      <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardcontent}>
      <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            multiline
            fullWidth
            rows={4}
            variant="filled"
            label="New Comment"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <CardActions disableSpacing>
               <Button classname={classes.submit} size="small" type="submit">Submit</Button>
            </CardActions>
        </form>
      </CardContent>
    </Card>
      );
}

export default AddCommentForm;