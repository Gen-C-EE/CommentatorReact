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
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'


import Comment from '../entities/Comment'
import Comments from './Comments'
import AddCommentForm from './AddCommentForm'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')


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
  },
  hidden: {
    display: "none"
  }

}));

const CommentCard = ({comment,rerenderCallback,video}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [addComment, setAddComment] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddCommentClick = () => {
    setAddComment(!addComment);
  };

  const handleNewComment = () => {
    setAddComment(false);
    setExpanded(true);
  }

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
        title="User Name"
        subheader={timeAgo.format(new Date(comment.timestamp))}
        //{comment.timestamp}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comment.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">
          <FavoriteIcon />
      </IconButton>*/}
        <IconButton 
        aria-label="addcomment"
        onClick={handleAddCommentClick}>
          <InsertCommentIcon />
        </IconButton>
        <IconButton
          className={comment.replies.length<1 ? clsx(classes.hidden,classes.iconbtn) : classes.iconbtn}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <div className={classes.expandbtn}>{comment.replies.length} {comment.replies.length==1? "reply" : "replies"}</div>
          <ExpandMoreIcon
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
          />
        </IconButton>
      </CardActions>
      <Collapse in={addComment} timeout="auto" unmountOnExit>
        <CardContent>
          <AddCommentForm parent={comment.id} video={video} top={false}rerenderCallback={rerenderCallback} toggleForm={handleNewComment}/>
        </CardContent>
      </Collapse>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardcontent}>
          <Comments video={video} top={false} replies={comment.replies} rerenderCallback={rerenderCallback} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CommentCard

CommentCard.propTypes = {
    comment: Comment
}