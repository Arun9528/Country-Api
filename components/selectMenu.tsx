"use client"
import { addRegionValue } from "@/lib/slices/countrydataSlice";
import { ChangeEvent} from "react"
import { useDispatch } from "react-redux"
export default  function SelectMenu(){
    const dispatch = useDispatch();
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        dispatch(addRegionValue(e.target.value)) 
    }
     return (
          <select className="w-full py-2 sm:py-3 ps-2 md:w-96 border rounded-md dark:bg-gray-900 divWidth" onChange={handleChange}>
                <option value = "">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
     )
}