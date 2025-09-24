'use client'
import {countryProps } from "@/lib/slices/countrydataSlice";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export interface countryBorder{
  name:{common:string},
  cca3:string
}
export default function CountryName() {
  const countryData = useSelector((state:RootState)=> state.country.data);
  const [countryName,setCountryName] = useState<Omit<countryProps,"cca3">>({
     name: { common: "" },
  capital: [],
  languages: {},
  flags: {
    svg: "",
    png: "",
    alt: ""
  },
  region: "",
  population: 0,
  nativeName: "",
  subregion: "",
  borders: [],
  currencies: {},
  area: 0
  })
  const path = usePathname();
  const pathName = path?.split("/")[1];
  const decodeUrl = decodeURIComponent(pathName);
  useEffect(()=>{
    const getCountryNameData = sessionStorage.getItem("countryName") || "";
    const getBorderData = sessionStorage.getItem("borderdata") || "[]"
    const getpathName = sessionStorage.getItem("countrypaths") || ""
    const parsedborder:countryBorder[] = JSON.parse(getBorderData);
    if(getCountryNameData && decodeUrl === JSON.parse(getpathName) ){
      const parsedData = JSON.parse(getCountryNameData);
      const z = parsedborder.filter(d => parsedData?.borders?.includes(d.cca3))
      setCountryName({...parsedData,borders:z})
    }else{
       const getCountryData = sessionStorage.getItem("CountryData") || "[]";
       const AfterReload:countryProps[] = countryData?.length > 0 ? countryData : JSON.parse(getCountryData);
       const findData = AfterReload.find(d => d?.name?.common.toLowerCase() === decodeUrl.toLowerCase());
       if(findData !== undefined){
          const filterBorder = parsedborder.filter(d => findData.borders.includes(d.cca3));
          setCountryName({...findData,borders:filterBorder as unknown as string[]});
          sessionStorage.setItem("countryName",JSON.stringify(findData));
          sessionStorage.setItem("countrypaths",JSON.stringify(decodeUrl))
       }
    }
  },[countryData,decodeUrl])
  const population = countryName?.population.toLocaleString("en-IN");
  const area = countryName?.area.toLocaleString("en-IN");
  const currencies = Object.values(countryName?.currencies)?.map(d => d.name).join(", ");
  const languages = Object.values(countryName?.languages).join(", ")
  const bordersName = Object.values(countryName?.borders) as unknown as countryBorder[];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7 pb-7 sm:pb-0 content-start auto-rows-auto px-7 min-h-[calc(100vh-4.05rem)] dark:bg-gray-900 dark:text-white CountryDatastyle overflow-x-hidden">
      <Link
        href={"/"}
        className=" col-span-full h-fit border w-fit rounded-md py-2 mt-6 sm:mt-10 px-5 dark:bg-gray-700 dark:border-0
         bg-black text-white"
      >
        Back
      </Link>
      <div className="relative h-80 sm:h-96 w-full rounded-lg overflow-hidden lg:mt-12 shadow-2xl">
        {
          countryName.flags.svg ?
           <Image
          src={countryName?.flags?.svg}
          alt={countryName?.flags?.alt}
          fill
          priority
          className="object-cover "
        /> : null
        }
      </div>
      <div className="content-center">
        <h2 className="text-4xl font-semibold">{countryName?.name.common}</h2>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-2 mt-5">
          <p>
            <span className="font-medium">Native Name :</span>{" "}
            {countryName?.nativeName ? countryName.nativeName : "Not Found"}
          </p>
          <p>
            <span className="font-medium">Population :</span> {population}
          </p>
          <p>
            <span className="font-medium">Region :</span> {countryName?.region ? countryName.region : "Not Found"}
          </p>
          <p>
            <span className="font-medium">Sub Region :</span>{" "}
            {countryName?.subregion ? countryName.subregion : "Not Found"}
          </p>
          <p>
            <span className="font-medium">Capital :</span>{" "}
            {countryName?.capital ? countryName?.capital : "No Capital"}
          </p>
          <p>
            <span className="font-medium">Currencies : </span> {currencies}
          </p>
          <p>
            <span className="font-medium">Languages : </span>
            {languages}
          </p>
          <p>
            <span className="font-medium">Area :</span> {area} km
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-6">
          <p className="font-medium">Border Countries:</p>
          {
            bordersName?.length > 0 ? (
                bordersName?.map((d) => (
            <Link
              href={`/${d?.name?.common}`}
              key={d?.name?.common}
              className="py-1.5 border px-3 rounded-md dark:bg-gray-800 dark:border-0"
            >
              {d?.name?.common}
            </Link>
          ))
            ) : 
            <p>Border Not Found</p>
          }
        </div>
      </div>
    </div>
  );
}
