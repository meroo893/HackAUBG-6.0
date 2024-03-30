import HeroJumbotron from "./HeroJumbotron";

//Add hero
export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center border-2 border-border rounded-md min-h-32 mt-4">
        <div className="flex justify-center items-center flex-auto">
          <HeroJumbotron />
        </div>
      </div>
    </>
  );
}
