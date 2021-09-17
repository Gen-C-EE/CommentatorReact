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