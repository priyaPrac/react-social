import SharePost from "../sharePost/SharePost.jsx"
import Post from "../post/Post";
import "./feed.css";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <SharePost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
