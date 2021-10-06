export const postVideo = (watchId) => {
    var newVideo = {watchID: watchId}
    return fetch('http://localhost:8080/videos',
        {
            method: 'POST',
            body: JSON.stringify(newVideo),
            headers:  { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        }
    );
  }