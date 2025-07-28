export default function HomePageShimmer() {
  return (
    [...Array(8)].map((_, i) => (
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
        ))
  );
}
