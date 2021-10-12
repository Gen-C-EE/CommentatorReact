import React, { useEffect, useState, useReducer } from 'react';
import { getComments, getReplies } from '../apis/commentApi';
import AppContext from '../contexts';
import CommentCard from './CommentCard'

const Comments = (props) => {

    const [comments, setComments] = useState([]);//useContext(AppContext);

    useEffect(() => {
        console.log("UseEffect()")
        if(props.top){
            setTimeout(() => getComments(props.video)
            .then(cmts => {/*console.log(cmts);*/ setComments(cmts); })
            .catch(error => console.log(error)),1000);
        }

        else{
            //console.log(props.replies)
            setComments(props.replies)
        }
    }, [setComments,props]);

    
    return (
        Array.isArray(comments)
        ?
        comments.map(comment => <CommentCard key={ comment.id } comment={ comment } rerenderCallback={props.rerenderCallback} video={props.video}/>).sort((a,b)=> new Date(Date.parse(a.timestamp))> new Date(Date.parse(b.timestamp)) ? -1 : 1 )
        :
            <div>error</div>
    );
}

export default Comments

