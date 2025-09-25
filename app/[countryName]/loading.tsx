export default function CountryNameLoading(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7 p-7 min-h-[calc(100vh-4.05rem)]">
      <div className="col-span-full h-10 w-24 rounded bg-gray-500 dark:bg-gray-600 animate-pulse" />
      <div className="relative h-80 sm:h-96 w-full rounded-lg bg-gray-600 animate-pulse" />
      <div className="space-y-7 p-2">
        <div className="h-8 w-1/3 rounded bg-gray-500 dark:bg-gray-600 animate-pulse" />
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 w-full rounded bg-gray-500 dark:bg-gray-600 animate-pulse" />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="h-6 w-32 rounded bg-gray-500 dark:bg-gray-600 animate-pulse" />
          <div className="h-6 w-20 rounded bg-gray-500 dark:bg-gray-600 animate-pulse" />
          <div className="h-6 w-24 rounded bg-gray-500 dark:bg-gray-600 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
