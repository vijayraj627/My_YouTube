import { imgIcon } from "../utils/constants";

const LiveChat = (props) => {
    return(
        <div className="flex p-2 text-sm">
            <img className="rounded-full" src={imgIcon} alt="Icon"/>
            <span className="ml-2 text-gray-500">{props.name}</span>
            <span className="ml-2">{props.msg}</span>
        </div>
    )
}
export default LiveChat;