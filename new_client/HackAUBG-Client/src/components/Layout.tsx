import { Outlet } from "react-router-dom";
import style from "../assets/style";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-primary">
          <nav className={`${style.pageWidth} ${style.pageMargin}`}>
            <Navigation></Navigation>
          </nav>
        </div>

        <div className="bg-background flex-auto">
          <main>
            <Outlet />
          </main>
        </div>

        <div className="bg-primary">
          <footer className={`${style.pageWidth} ${style.pageMargin}`}>
            <Footer></Footer>
          </footer>
        </div>
      </div>
    </>
  );
}
