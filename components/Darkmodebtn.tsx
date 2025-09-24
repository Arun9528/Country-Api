"use client"
import { useEffect, useState } from "react"
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa6"

export default function DarkModebtn(){
    const [isDarkMode,setIsDarkMode] = useState<boolean>(false);
    useEffect(()=>{
         const raw = sessionStorage.getItem("darkMode") || false;
         if(raw){
            const parsedData = JSON.parse(raw);
            document.documentElement.classList.toggle("dark",parsedData);
            setIsDarkMode(parsedData);
         }
    },[])
    const handleDarkMode = ()=>{
        setIsDarkMode(prev => {
            const next = !prev;
            sessionStorage.setItem("darkMode", JSON.stringify(next));
            document.documentElement.classList.toggle("dark", next);
            return next
        });
    }
     return (
        <button type="button" className="cursor-pointer flex items-center justify-end text-xs min-[400px]:max-sm:text-sm sm:text-lg font-medium" onClick={handleDarkMode}>{isDarkMode ? <FaMoon/> :<FaSun/>} &nbsp; {isDarkMode ? "Dark Mode" : "Light Mode"}</button>
     )
}