import RecommendationCard from './RecommendationCard';
import Image1 from '../../../assets/asian man.png';
import Image2 from '../../../assets/black man.png';
import Image3 from '../../../assets/greek man.png';

type review = {
  id: number;
  review: string;
  author: string;
  occupation: string;
  image: string;
};

const data: Array<review> = [
  {
    id: 1,
    author: 'Jamal Husein',
    occupation: 'Software Engineer',
    review:
      "I absolutely loved It! It's intuitive to use and has greatly improved the quality of my insurance and saved me money. Highly recommended.",
    image: Image2,
  },
  {
    id: 2,
    author: 'Kenpachi Zaraki',
    occupation: 'Teacher',
    review:
      "As an educator, I find this product extremely helpful in organizing my finances and keeping track of my safety. It's a game-changer!",
    image: Image1,
  },
  {
    id: 3,
    author: 'Edward Newgate',
    occupation: 'Marketing Manager',
    review:
      "Being in the marketing field, I'm always on the lookout for tools that can streamline our campaigns. This product exceeded my expectations and has become an essential part of our workflow.",
    image: Image3,
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
          image={x.image}
        ></RecommendationCard>
      ))}
    </div>
  );
}
