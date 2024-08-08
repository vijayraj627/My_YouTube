import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/liveChatSlice";
import { generateName, makeRandomMessage } from "../utils/helper";

const ChatContainer = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.liveChat.messages);

    const handleMessage = (e) => {
            e.preventDefault();
        dispatch(addMessages({
                name: "You",
                message: liveMessage
            }));

        setLiveMessage("");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessages({
                name: generateName(),
                message: makeRandomMessage(20)
            }))
        }, 2000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <>
            <div className="flex flex-col-reverse p-2 text-sm">
                {chatMessages.map((item, i) => (
                    <LiveChat key={i} name={item.name} msg={item.message} />
                ))}
            </div>

            <form onSubmit={handleMessage}>
                <input
                    type="text"
                    className="bg-slate-100 w-[300px] p-1 mb-1 rounded-l-lg"
                    placeholder="Chat..."
                    onChange={(e) => setLiveMessage(e.target.value)}
                    value={liveMessage}
                />
                <button
                    className="bg-slate-300 p-1 mb-1 hover:bg-slate-400 rounded-r-lg"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </>
    )
}

export default ChatContainer;
