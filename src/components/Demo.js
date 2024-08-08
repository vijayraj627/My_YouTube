import { useState } from "react";
import { Prime } from "../utils/helper";
const Demo = () => {

    const [text, setText] = useState("");
    const [mode, setMode] = useState(false)

    const prime = Prime(text);

    console.log(prime)
    return(
            <div className={`p-2 m-2 h-96 w-96 border border-black ${mode ? "bg-slate-950 text-white" : ""}`}>
            <input className={`m-4 border border-black ${mode ? "text-black" : ''}`} type="number" value={text}
                onChange={(e)=>{setText(e.target.value)}}
            />
            <p className="">Result : {prime} </p>
            <button className="bg-rose-600 p-2 m-4 rounded"
                onClick={()=>{
                    setMode(!mode)
                }}
            >ChangeColor</button>
        </div>
    )
}

export default Demo;