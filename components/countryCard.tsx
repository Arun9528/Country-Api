import { countryProps } from "@/lib/slices/countrydataSlice";
import Image from "next/image";
import Link from "next/link";

export default function CountryCard({data}:{data:Pick<countryProps, "name" | "capital" | "flags" | "population" | "region">}){
    const population = data.population.toLocaleString("en-IN");
    return (
        <Link href={`/${data.name.common}`} className="inline-block h-[25rem] sm:h-96 justify-self-center w-96 sm:w-72 border rounded-lg overflow-hidden">
            <div className="relative w-full h-60 sm:h-52">
                <Image src={data.flags.svg} alt={data.flags.alt} fill className="object-cover" priority/>
            </div>
            <div className="p-2 transform sm:translate-y-5 translate-y-3">
                <p className="text-center py-1 font-bold"> {data.name.common}</p>
                <p ><span className="font-medium">Population :</span> {population}</p>
                <p><span className="font-medium">Region :</span> {data.region}</p>
                <p><span className="font-medium">Capital :</span> {data.capital.join("") ? data.capital : "No Capital"}</p>
            </div>
        </Link>
    )
}