export default function Footer() {
  return (
    <div className="bg-red-500 min-w-full">
      <div className="min-w-[1024px] m-auto bg-primary flex flex-row justify-center items-center">
        <div className="flex justify-between w-[1000px]">
          <div className="py-3">
            <h2 className="font-bold">Contacts</h2>
            <h4 className="text-blue-500 hover:text-blue-700">Petko</h4>
            <h4 className="text-blue-500 hover:text-blue-700">Sasho</h4>
            <h4 className="text-blue-500 hover:text-blue-700">Dobri</h4>
            <h4 className="text-blue-500 hover:text-blue-700">Mert</h4>
            <h4 className="text-blue-500 hover:text-blue-700">Gosho</h4>
          </div>
          <div className="py-3">
            <h2 className="font-bold">Links</h2>
            <a
              href="http://mtf.tu-sofia.bg/"
              className="text-blue-500 hover:text-blue-700"
            >
              FIT
            </a>
          </div>
          <div className="py-3">
            <h2 className="font-bold">Products</h2>
            <h4 className="text-blue-500 hover:text-blue-700">This one</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
