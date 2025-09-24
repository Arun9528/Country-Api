import DarkModebtn from "./Darkmodebtn";

export default function Header(){
     return (
        <header className="grid grid-cols-2 items-center justify-between w-full px-2 sm:px-4 py-3 border-b shadow-lg
         dark:bg-gray-900 dark:text-white">
            <h1 className="text-base min-[350px]:max-[410px]:text-lg min-[410px]:max-sm:text-xl sm:text-3xl md:text-4xl font-medium ">Where in the World?</h1>
            <DarkModebtn/>
        </header>
     )
}