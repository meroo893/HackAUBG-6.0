import HeroJumbotron from "./HeroJumbotron";

//Add hero
export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center border-2 border-border rounded-md bg-red-700 min-h-32 mt-4">
        <div className="flex justify-center items-center bg-blue-400">
          <span className="min-h-12">Hero Title</span>
        </div>
        <div className="flex justify-center items-center flex-auto">
          <HeroJumbotron />
        </div>
      </div>
    </>
  );
}
