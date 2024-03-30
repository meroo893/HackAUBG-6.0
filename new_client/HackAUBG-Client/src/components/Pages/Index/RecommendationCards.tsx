import RecommendationCard from "./RecommendationCard";

type review = {
  id: number;
  review: string;
  author: string;
  occupation: string;
};

const data: Array<review> = [
  {
    id: 1,
    author: "Emily Johnson",
    occupation: "Software Engineer",
    review:
      "I absolutely loved the product! It's intuitive to use and has greatly improved my productivity at work. Highly recommended.",
  },
  {
    id: 2,
    author: "David Smith",
    occupation: "Teacher",
    review:
      "As an educator, I find this product extremely helpful in organizing my lesson plans and keeping track of student progress. It's a game-changer!",
  },
  {
    id: 3,
    author: "Jennifer Garcia",
    occupation: "Marketing Manager",
    review:
      "Being in the marketing field, I'm always on the lookout for tools that can streamline our campaigns. This product exceeded my expectations and has become an essential part of our workflow.",
  },
];

export default function RecommendationCards() {
  return (
    <div className="flex justify-between min-w-full max-h-full mt-6 p-12">
      {data.map((x) => (
        <RecommendationCard
          key={x.id}
          review={x.review}
          author={x.author}
          occupation={x.occupation}
        ></RecommendationCard>
      ))}
    </div>
  );
}
