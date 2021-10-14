import {useReducer,useEffect,useState} from "react";
import "../styles/YoutubeEmbed.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Comments from "./Comments"
import {useParams} from "react-router-dom";
import AddCommentForm from './AddCommentForm'
import { getComments } from '../apis/commentApi';
import { postVideo } from '../apis/videoApi';


const VideoPage = (props) => {
    const [isLoading, setLoading] = useState(false);
    const {watchId} = useParams()
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    var rerenderParentCallback = () => {
      //console.log("rerender");
      forceUpdate();
    };

    var comments = isLoading ? <h1>"Loading Comments"</h1> : <Comments top={true} video={watchId} rerenderCallback={rerenderParentCallback}/>;

    useEffect(() => {
      //console.log("UseEffect() video");
      postVideo(watchId);
  }, [isLoading]);

    //console.log(watchId)
    return (
        <div>
        <div className="App">
          <h1></h1>
          <YoutubeEmbed embedId={watchId} />
        </div>
        <AddCommentForm parent={null} video={watchId} top={true} rerenderCallback={rerenderParentCallback} toggleForm={()=>{}}/>
        
        {comments}
        </div>
      );
}

export default VideoPage