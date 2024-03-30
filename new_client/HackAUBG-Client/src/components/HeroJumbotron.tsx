import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SparklesCore } from "./ui/sparkles";

export default function HeroJumbotron() {
  return (
    <div className="h-[20rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
      <Button className="mt-6 bg-background text-popover-foreground">
        <Link to="#" >
          Get Started Now
        </Link>
      </Button>
    </div>
  );
}
