//Add hero
export default function Hero() {
  return (
    <div className="flex flex-col justify-center border-2 border-border rounded-md bg-red-700 min-h-32 mt-4">
      <div className="flex justify-center items-center bg-blue-400">
        <span className="">Hero Title</span>
      </div>
      <div className="flex justify-center items-center bg-orange-700 flex-auto">
        Hero CTA
      </div>
    </div>
  );
}
