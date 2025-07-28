"use client"
import { searchCountryName } from "@/lib/slices/countrydataSlice";
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux";

export default  function SearchBar(){
    const dispatch = useDispatch();
    const [inputValue,setInputvalue] = useState<string>("");
    const [debouncing,setDebouncing] = useState<string>("");
    useEffect(()=>{
        const time = setTimeout(()=>{
            setDebouncing(inputValue.trim())
        },300);
        return ()=> clearTimeout(time)
    },[inputValue]);

    useEffect(()=>{
            dispatch(searchCountryName(debouncing))
    },[debouncing,dispatch])
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
         setInputvalue(value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} 
            value={inputValue}
            className="py-3 w-full md:w-96 border rounded-md outline-0 ps-2 divWidth "
            placeholder="Please Write a Country Name...."/>
        </div>
    )
}