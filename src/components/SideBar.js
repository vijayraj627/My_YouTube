import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () =>{

    const toggleSidebar = useSelector((store) => store.sidebar.isMenuOpen);

    return !toggleSidebar ? null : (
        <div className="">
            <div className="w-48">
                <ul className="border-b-2">
                    <li className="my-2 font-bold"><Link to="/">🏠︎ Home</Link></li>
                    <li className="my-2">🖇️ Shorts</li>
                    <li className="my-2">🎬 Subscriptions</li>
                </ul>

                <h1 className="font-bold">You</h1>
                <ul className="border-b-2">
                    <li className="my-2">🖥️ Your channel</li>
                    <li className="my-2">🕰️ History</li>
                    <li className="my-2">🎧 Playlists</li>
                    <li className="my-2">📷 Your videos</li>
                    <li className="my-2">🕰️ Watch later</li>
                    <li className="my-2">👍 Liked videos</li>
                </ul>

                <h1 className="font-bold">Subscriptions</h1>
                <ul className="border-b-2">
                    <li className="my-2">Bro Code</li>
                    <li className="my-2">hitesh Choudary</li>
                    <li className="my-2">Bollywood</li>
                    <li className="my-2">Tollywood</li>
                    <li className="my-2">Namaste Javascript</li>
                </ul>

                <h1 className="font-bold">Expolre</h1>
                <ul className="border-b-2">
                    <li className="my-2">Bro Code</li>
                    <li className="my-2">hitesh Choudary</li>
                    <li className="my-2">Bollywood</li>
                    <li className="my-2">Tollywood</li>
                    <li className="my-2">Namaste Javascript</li>
                </ul>

                <h1 className="font-bold">More For YouTube</h1>
                <ul className="border-b-2">
                    <li className="my-2">Bro Code</li>
                    <li className="my-2">hitesh Choudary</li>
                    <li className="my-2">Bollywood</li>
                    <li className="my-2">Tollywood</li>
                    <li className="my-2">Namaste Javascript</li>
                </ul>
            </div>
        </div>
    )
}


export default SideBar;
