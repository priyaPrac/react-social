import "./post.css";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="ProfilePic" className="postProfileImg" />
                        <span className="postUsername">Priya</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">Hey its my first Post:)</span>
                    <img src="/assets/post/1.jpeg" alt="postPic" className="postImg" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt="HeartIcon" />
                        <img className="likeIcon" src="/assets/like.png" alt="LikeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
