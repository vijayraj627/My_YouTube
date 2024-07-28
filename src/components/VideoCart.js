const VideoCart = (props) => {
    // console.log(props.video)
    return(
        <div className="m-2 p-6 shadow-sm w-96">
            <img className="rounded-lg" src={props.video.snippet.thumbnails.high.url} alt="Thumbnail"/>
            <ul>
            <li className="font-medium">{props.video.snippet.localized.title}</li>
            <li>{Math.floor(props.video.statistics.viewCount/10000)}K Views</li>
            </ul>
        </div>
    )
}

export default VideoCart;