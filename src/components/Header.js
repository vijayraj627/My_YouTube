import {useDispatch} from 'react-redux';
import { toggleSidebar, openSidebar } from '../utils/sidebarSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Youtube_Search_Suggestions_API } from '../utils/constants';

const Header = () =>{

    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(()=>{
        console.log(search);

        const timer = setTimeout(()=>{
            suggestionsAPI();
        }, 200);

        return () => clearTimeout(timer);
        
    },[search]);

    const suggestionsAPI = async () =>{
        
        const data = await fetch(Youtube_Search_Suggestions_API + search);

        const json = await data.json();

        setSuggestions(json[1]);
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleHomeClick = () =>{
        navigate("/")
        dispatch(openSidebar())
    } 


    const handleSideBar = () =>{
        dispatch(toggleSidebar())
    }

    return(
        <div className="grid grid-flow-col p-4 shadow-xl">
            <div className="flex col-span-2">
                <img onClick={()=>{handleSideBar()}} className="h-10 mx-4 cursor-pointer" src="https://cdn0.iconfinder.com/data/icons/user-interface-151/24/List_menu_toggle-512.png" alt= "toggle button"/>
                <img onClick={handleHomeClick}className="h-12 cursor-pointer" src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt="Youtube Logo"/>
            </div>
            <div className="col-span-9">
                <div>
                    <input type="text" placeholder="Search" value={search} 
                    onChange = {(e)=>{
                        setSearch(e.target.value);
                    }} 
                    onFocus={()=>setShowSuggestions(true)} 

                    onBlur={()=>setShowSuggestions(false)} 
                    
                    className="w-1/2 border-2 rounded-l-full p-2"/>
                    <button className="border-2 rounded-r-full p-2 border-l-0 bg-gray-100">🔍</button>
                </div>
                {showSuggestions && <div className="absolute bg-white w-[34rem] p-2 m-0 rounded-xl shadow-lg">
                    {suggestions.map((item,i)=>(
                        <ul key={i}>
                            <li className='p-1 hover:bg-gray-200'>🔍 {item}</li>
                        </ul>
                    ))}
                </div>}
            </div>
            <div className="col-span-1">
                <img  className="h-8" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="User Logo"/>
            </div>
        </div>
    )
}


export default Header;
