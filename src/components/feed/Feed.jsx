import SharePost from "../sharePost/SharePost.jsx"
import Post from "../post/Post";
import "./feed.css";
import {Posts} from "../../sampleData.js";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <SharePost/>
                {Posts.map( (p) => (
                    <Post key={p.id} post={p} />
                ))}                
            </div>
        </div>
    )
}
