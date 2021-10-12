const baseUrl="Commentatorspring-env.eba-8f3h3emw.us-east-2.elasticbeanstalk.com";

export const postVideo = (watchId) => {
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