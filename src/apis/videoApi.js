const baseUrl="conor.ee-cognizantacademy.com";

export const  postVideo = async (watchId) => {
    var newVideo = {watchID: watchId}
    return fetch(`https://${baseUrl}/videos`,
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