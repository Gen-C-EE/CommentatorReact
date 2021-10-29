const baseUrl="conor.ee-cognizantacademy.com";
//const baseUrl="localhost:8080";



export const getTopComments = (videoId) => {
    //console.log("top hit")
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
    //console.log(" getComments()")
    return fetch(`https://${baseUrl}/videos/${watchId}/comments`,{
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

  return fetch(`https://${baseUrl}/comments`,
      {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {'Content-type':'application/json'}
      }
  );
}

export const editComment = (id,newText) => {
  //console.log(Object.keys(comment));
  //console.log(JSON.stringify(comment));

  return fetch(`https://${baseUrl}/comments/${id}`,
      {
          method: 'PATCH',
          body: newText,
          headers: {'Content-type':'application/json'}
      }
  );
}

export const deleteComment = (id) => {
  //console.log(Object.keys(comment));
  //console.log("deleteComment API call");

  return fetch(`https://${baseUrl}/comments/${id}/delete`,
      {
          method: 'PATCH',
          headers: {'Content-type':'application/json'}
      }
  );
}