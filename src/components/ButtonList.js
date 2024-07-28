import { useState } from "react";

const ButtonList = () =>{

    const [current, setCurrent] = useState(0);
    const [total, setTotal] = useState(8);
    
    const buttonNames = ["All", "Live", "News","ReactRouters","Javascript","Music","API","Movies","Tollywood","Bollywood","ReactRouters","Javascript","Music","API","Movies"]
    
    const slicedButtons = buttonNames.slice(current,total);

    // console.log(slicedButtons)

    const handleNextClick = () =>{
        setCurrent(nxt => nxt+ 1);
        setTotal(nxt => nxt+ 1);
    }
    const handlePrevClick = () =>{
        setCurrent(prev => prev - 1);
        setTotal(prev => prev - 1);
    }
    
    return(
        <div className="flex">
            {slicedButtons.length < 8 && <button onClick={handlePrevClick} className="font-bold mr-10">Prev</button>}
            <div>
            {slicedButtons.map((item,i)=>(
                <button className="border px-6 m-4 bg-gray-100 font-medium rounded-lg hover:bg-gray-300" key={i}>{item}</button>
            ))}
            </div>
            {slicedButtons.length >= 8 && <button onClick={handleNextClick} className="font-bold ml-10">Next</button>}
        </div>
    )
}


export default ButtonList;
