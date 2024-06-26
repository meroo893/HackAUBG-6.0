import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AuthButton from "./AuthButton";

export default function Navigation() {
  return (
    <>
      <div className="flex justify-between text-background p-4">
        <h1 className="flex justify-center items-center text-black">
          <Link to="home" className="font-bold italic text-3xl">
            SafeCare
          </Link>
        </h1>
        <section className="flex gap-8">
          <Navbar />
        </section>
        <section className="flex items-center justify-center">
          <AuthButton />
        </section>
      </div>
    </>
  );
}
