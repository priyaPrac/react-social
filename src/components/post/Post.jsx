import "./post.css";
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../sampleData";

export default function Post({post}) {

    //to increment/decrement the like count
    const [like,setLike] = useState(post.like);

    //to set/unset isLike i.e., if the person has already liked the post, dislike it and reduce the like count, else like it and increase the like count
    const [isLiked,setIsLiked] = useState(false);

    function likeHandler() {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);    
    }

    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        {/* get the images of the particular user who posted that picture/post */}
                        <img src={ Users.filter( (u) => u.id === post.userId )[0].profilePicture }alt="ProfilePic" className="postProfileImg" />
                        {/* get the posts of the particular user alone */}
                        <span className="postUsername">{Users.filter( (u) => u.id === post.userId )[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                <div className="postCenter">
                {/* some posts don't have any description */}
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="postPic" className="postImg" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt="HeartIcon" onClick={likeHandler} />
                        <img className="likeIcon" src="/assets/like.png" alt="LikeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
