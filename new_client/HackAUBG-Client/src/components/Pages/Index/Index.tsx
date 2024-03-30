import style from "../../../assets/style";
import FAQ from "./FAQ";
import Hero from "./Hero";
import InfoCards from "./InfoCards";
import RecommendationCards from "./RecommendationCards";

export default function Index() {
  return (
    <div className={`${style.pageWidth} ${style.pageMargin} bg-background`}>
      <Hero></Hero>
      <RecommendationCards></RecommendationCards>
      <InfoCards></InfoCards>
      <FAQ></FAQ>
    </div>
  );
}
