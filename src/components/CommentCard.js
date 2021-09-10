import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { spacing } from '@material-ui/system';


import Comment from '../entities/Comment'
import Comments from './Comments'

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  expandbtn: {
    fontSize: 15
  },
  iconbtn: {
    marginLeft: "auto"
  },
  cardcontent: {
    paddingRight : 0.5
  }
}));

const CommentCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={props.comment.timestamp}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.comment.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">
          <FavoriteIcon />
      </IconButton>*/}
        <IconButton aria-label="addcomment">
          <InsertCommentIcon />
        </IconButton>
        <IconButton
          className={classes.iconbtn}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <div className={classes.expandbtn}>{props.comment.replies.length} replies</div>
          <ExpandMoreIcon
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
          />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardcontent}>
          <Comments video="watchid2" top={false}/>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CommentCard

CommentCard.propTypes = {
    comment: Comment
}