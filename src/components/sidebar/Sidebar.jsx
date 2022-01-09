import "./sidebar.css";
import { RssFeed, Chat } from "@mui/icons-material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutlineOutlined';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                     <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <PeopleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="friendPic" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li> 
                </ul>
            </div>
        </div>
    )
}