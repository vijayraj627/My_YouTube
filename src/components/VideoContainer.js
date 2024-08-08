import { useEffect, useState } from "react";
import { Youtube_Video_API } from "../utils/constants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collapseSidebar } from "../utils/sidebarSlice";
const VideoContainer = () =>{

    const [video, setVideo] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetchAPI();
    },[]);

    const fetchAPI = async () => {

        const data = await fetch(Youtube_Video_API);

        const json = await data.json();

        setVideo(json.items);

        // console.log(json.items)

    }

    const collapseSideBar = () =>{
        dispatch(collapseSidebar())
    }
    return(
        <div className="flex flex-wrap">
            {video.map((item,i)=>(
                <Link  key={item.id} to={"/watch?v="+item.id} className="hover:bg-zinc-300" onClick={collapseSideBar}><VideoCart video = {item}/></Link>
            ))}
            
        </div>
    )
}


export default VideoContainer;
