export default function Loading() {
  return (
    <div className=" min-h-[calc(100vh-4.05rem)]">
      <div className="pt-5 block md:flex md:justify-between px-8 space-y-6 md:space-y-0 ">
        <div className="h-12 w-full md:w-96 bg-gray-600 rounded-md divWidth animate-pulse "></div>
        <div className="h-12 w-full md:w-96 bg-gray-600 rounded-md divWidth animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center gap-8 py-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-[25rem] sm:h-96 justify-self-center w-96 sm:w-72 rounded-lg bg-gray-700 overflow-hidden"
          >
            <div className="h-60 sm:h-52 bg-gray-600 animate-pulse"></div>
            <div className="p-2 transform sm:translate-y-6 translate-y-3">
              <div className="h-7">
                <div className="bg-gray-500 animate-pulse h-6 w-28 justify-self-center rounded-sm"></div>
              </div>
               <div className="h-7">
                <div className="bg-gray-500 animate-pulse h-6 w-52 rounded-sm"></div>
              </div>
               <div className="h-7">
                <div className="bg-gray-500 animate-pulse h-6 w-52 rounded-sm"></div>
              </div>
               <div className="h-7">
                <div className="bg-gray-500 animate-pulse h-6 w-52 rounded-sm"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
