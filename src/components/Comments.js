import React, { useEffect, useState, useContext } from 'react';
import { getTopComments, getReplies } from '../apis/commentApi';
import AppContext from '../contexts';
import CommentCard from './CommentCard'

const Comments = (props) => {

    const [comments, setComments] = useState({list:[]});//useContext(AppContext);

    useEffect(() => {
        if(props.top){
            getTopComments(props.video)
            .then(cmts => {/*console.log(cmts.list);*/ setComments(cmts); })
            .catch(error => console.log(error));
            
        }
        else{
            getReplies(props.video)
            .then(cmts => {/*console.log(cmts.list);*/ setComments(cmts); })
            .catch(error => console.log(error));
        }
    }, [setComments]);



    
    return (
        comments
        ?
        comments.list.map(comment => <CommentCard key={ comment.id } comment={ comment } />)
        :
            <div>hell</div>
    );
}

export default Comments

