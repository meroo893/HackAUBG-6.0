import Navbar from "./Navbar";

export default function Navigation() {
  return (
    <>
      <div className="flex justify-between text-background p-4">
        <h1>Project Name</h1>
        <section className="flex gap-8">
          <Navbar />
        </section>
        <section className="flex">
          <div>Login</div>
        </section>
      </div>
    </>
  );
}
