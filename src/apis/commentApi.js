//import TopComments from "topComments.json"
//import Replies from "commentReplies.json"

export const getTopComments = (videoId) => {
    return fetch('data/topComments.json')
    .then( response => response.json());
    //return TopComments.topComments;
}

export const getReplies = (parent) => {
    return fetch('data/commentReplies.json')
    .then( response => response.json());}