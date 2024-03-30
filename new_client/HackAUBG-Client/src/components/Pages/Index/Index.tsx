import style from "../../../assets/style";
import Hero from "./Hero";
import RecommendationCards from "./RecommendationCards";

export default function Index() {
  return (
    <div className={`${style.pageWidth} ${style.pageMargin} bg-background`}>
      <Hero></Hero>
      <RecommendationCards></RecommendationCards>
      
    </div>
  );
}
