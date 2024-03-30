import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Navigation() {
  return (
    <>
      <div className="flex justify-between text-background p-4">
        <h1 className="flex justify-center items-center">
          <Link to="home">Project Name</Link>
        </h1>
        <section className="flex gap-8">
          <Navbar />
        </section>
        <section className="flex items-center justify-center">
          <Link to="Login">Login</Link>
        </section>
      </div>
    </>
  );
}
