type recommendationCardProps = {
  review: string;
  author: string;
  occupation: string;
};

export default function RecommendationCard(props: recommendationCardProps) {
  return (
    <div className="flex flex-col min-h-48 min-w-32">
      <div className="flex justify-between m-2">
        <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
        <div>
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
