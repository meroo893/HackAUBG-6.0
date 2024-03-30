import Image from '../../../assets/stars.png';

type recommendationCardProps = {
  review: string;
  author: string;
  occupation: string;
  image: string;
};

export default function RecommendationCard(props: recommendationCardProps) {
  return (
    <div className="flex flex-col min-h-48 min-w-32 shadow-lg">
      <div className="flex justify-between m-2">
        <div className="bg-gray-500 w-8 h-8 rounded-full">
          <img src={props.image} alt="asian" className="rounded-full" />
        </div>
        <div>
          <img className="max-w-[6rem] margin-right" src={Image} alt="stars" />
        </div>
      </div>
      <div className="flex flex-col flex-1 m-2 items-center">
        <div>{props.review}</div>
        <div>{props.author}</div>
        <div>{props.occupation}</div>
      </div>
    </div>
  );
}
