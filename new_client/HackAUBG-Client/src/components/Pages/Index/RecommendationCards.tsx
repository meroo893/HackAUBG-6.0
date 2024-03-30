import RecommendationCard from "./RecommendationCard";

export default function RecommendationCards() {
  return (
    <div className="flex flex-wrap justify-between min-w-full max-h-full mt-6 p-12">
      <RecommendationCard />
      <RecommendationCard />
      <RecommendationCard />
    </div>
  );
}
