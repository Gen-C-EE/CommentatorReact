export const getTopComments = (videoId) => {
    console.log("top hit")
    return fetch(`${process.env.PUBLIC_URL}/data/topComments.json`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then( response => response.json());
}

export const getReplies = (parent) => {
    return fetch(`${process.env.PUBLIC_URL}/data/commentReplies.json`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then( response => response.json());
}

export const getComments = (watchId) => {
    console.log(" getComments()")
    return fetch(`http://localhost:8080/videos/${watchId}/comments`,{
    //return fetch(`${process.env.PUBLIC_URL}/data/comments.json`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then( response => response.json());
}

export const postComment = (comment) => {
  //console.log(Object.keys(comment));
  //console.log(JSON.stringify(comment));

  return fetch('http://localhost:8080/comments',
      {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {'Content-type':'application/json'}
      }
  );
}