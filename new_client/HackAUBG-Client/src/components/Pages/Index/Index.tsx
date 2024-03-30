import style from "../../../assets/style";
import FAQ from "./FAQ";
import Hero from "./Hero";
import InfoCards from "./InfoCards";
import RecommendationCards from "./RecommendationCards";

export default function Index() {
  return (
    <div className={`${style.pageWidth} ${style.pageMargin} bg-background`}>
      <Hero></Hero>
      <InfoCards></InfoCards>
      <RecommendationCards></RecommendationCards>
      <FAQ></FAQ>
    </div>
  );
}
