export default function Recommendation() {
  return (
    <div className="flex flex-col min-h-48 min-w-32">
      <div className="flex justify-between">
        <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
        <div className="bg-red-700">ASD</div>
      </div>
      <div className="flex flex-col flex-1 m-2 items-center">
        <div>Text</div>
        <div>Author</div>
        <div>Profession</div>
      </div>
      <div className="m-auto">Footer</div>
    </div>
  );
}
