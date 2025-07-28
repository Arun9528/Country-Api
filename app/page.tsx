import GetValue from "@/components/getValue";
import SearchBar from "@/components/searchBar";
import SelectMenu from "@/components/selectMenu";
export default function Home() {
  return (
    <div className=" min-h-[calc(100vh-4.05rem)]">
      <div className="pt-5 block md:flex md:justify-between px-8 space-y-6 md:space-y-0">
        <SearchBar/>
        <SelectMenu/>
      </div>
       <GetValue/>
    </div>
  );
}
