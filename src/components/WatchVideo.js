import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ChatContainer from "./ChatContainer";
import { useEffect } from "react";
import { collapseSidebar } from "../utils/sidebarSlice";

const WatchVideo = () =>{


    const collapseSidebar1 = useSelector((store) => store.sidebar.isMenuOpen);

    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(collapseSidebar()) 
    },[])
    const [searchParams] = useSearchParams();
    return(
        <div className="flex w-full">
            <div className="p-8">
                <iframe className="rounded-lg" width="1000" height="500" 
                    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                    title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
            <div className=" w-full">
            <div className="border h-[500px] p-2 mt-8 rounded overflow-y-scroll">
                <h1 className="font-semibold p-4 border-b-2">Live Chat</h1>
                <ChatContainer/>
            </div>
            </div>
        </div>
    )
}

export default WatchVideo;