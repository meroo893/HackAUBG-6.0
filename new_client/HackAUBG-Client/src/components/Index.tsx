import style from "../assets/style";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <div className={`${style.pageWidth} ${style.pageMargin} bg-background`}>
      <Hero></Hero>
    </div>
  );
}
