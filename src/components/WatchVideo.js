import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () =>{

    const collapseSidebar = useSelector((store) => store.sidebar.isMenuOpen);
    console.log(collapseSidebar)
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    return(
        <div className="p-8">
            <iframe className="rounded-lg" width="1000" height="500" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
             </iframe>
        </div>
    )
}

export default WatchVideo;