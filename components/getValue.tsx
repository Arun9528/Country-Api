"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountryData, countryProps } from "@/lib/slices/countrydataSlice";
import { RootState } from "@/lib/store";
import CountryCard from "./countryCard";
import { countryBorder } from "@/app/[countryName]/page";
import HomePageShimmer from "./homepageShimmer";
const url =
  "https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,borders,area,population,flags";
const borderdata = "https://restcountries.com/v3.1/all?fields=name,cca3";
export default function GetValue() {
  const { data, regionValue,countryName} = useSelector((state: RootState) => state.country);
  const [firstTimeLoading,setFirstTimeLoading] = useState<boolean>(true)
  const dispatch = useDispatch();
  useEffect(() => {
    const getCountryData = sessionStorage.getItem("CountryData") || "";
    if(getCountryData){
      const parsedData = JSON.parse(getCountryData);
      dispatch(addCountryData(parsedData))
    }else{
       async function fetchingData() {
      try {
        // const res = await fetch(url);
        // const res1 = await fetch(borderdata);
        const [res,res1] = await Promise.all([fetch(url),fetch(borderdata)])
        if (!res.ok) throw new Error(`fetching failed: ${res.status}`);
        const datas = (await res.json()) as countryProps[];
        const datas1 = (await  res1.json()) as countryBorder
        dispatch(addCountryData(datas));
        sessionStorage.setItem("CountryData",JSON.stringify(datas))
        sessionStorage.setItem("borderdata",JSON.stringify(datas1));
        setFirstTimeLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchingData();
    }
  }, [dispatch]);
  const filterCountrydata = data?.filter(d => d?.name.common.toLowerCase().includes(countryName));
  const filterRegion = data.filter(d => d.region.toLowerCase() === regionValue.toLowerCase());
  const searchingRegionCountry = filterRegion.filter(d=> d.name.common.toLowerCase().includes(countryName))
  let Countrylist:countryProps[] = data;
  if(countryName && regionValue){
      Countrylist = searchingRegionCountry;
  }else if(countryName && !regionValue){
      Countrylist = filterCountrydata;
  }else if(!countryName && regionValue){
      Countrylist = filterRegion;
  }
  return (
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center gap-8 py-8">
              {
                Countrylist?.length > 0 ? (Countrylist?.map((data)=> <CountryCard key={data.name.common} data={data} />)) :
                 firstTimeLoading ? <HomePageShimmer/> : <h1 className="text-6xl col-span-full justify-self-center ">Not Found</h1> 
              }
        </div>)
}
