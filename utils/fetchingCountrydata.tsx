import { countryProps } from "@/lib/slices/countrydataSlice";

export default async function FetchingCountryData(url:string=""):Promise<countryProps[]> {
    if(!url) return [];
    let data;
    try{
       const res = await fetch(url);
      if (!res.ok) throw new Error(`fetching failed: ${res.status}`);
       data = (await res.json()) as countryProps[];
    }catch(err){
      console.error(err);
    }
   
  return data ?? []
}
