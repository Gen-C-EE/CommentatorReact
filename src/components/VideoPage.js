import React from "react";
import "../styles/YoutubeEmbed.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Comments from "./Comments"
import {useParams} from "react-router-dom";


const VideoPage = (props) => {
    const {watchId} = useParams()
    console.log(watchId)
    return (
        <div>
        <Comments top={true} video={watchId}/>
        <div className="App">
          <h1>Youtube Embed</h1>
          <YoutubeEmbed embedId={watchId} />
        </div>
        </div>
      );
}

export default VideoPage