import React from 'react';
import "./online.css";

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="profilePic" className="rightbarProfileImg" />
                <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}
