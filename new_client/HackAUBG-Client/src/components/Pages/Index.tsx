import style from "../../assets/style";
import Hero from "../Hero";

export default function Index() {
  return (
    <div className={`${style.pageWidth} ${style.pageMargin} bg-background`}>
      <Hero></Hero>
    </div>
  );
}
