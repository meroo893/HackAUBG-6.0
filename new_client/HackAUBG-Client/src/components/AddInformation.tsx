export default function AddInformation() {
  return (
    <div className="flex justify-center position-fixed top-0">
      <div className="w-[400px] bg-white shadow-md p-4 rounded-md">
        <h1 className="text-lg mb-3 font-bold">Add Your Information</h1>
        <form action="">
          <input
            required
            name="name"
            placeholder="Full Name"
            className="mb-3 w-full input input-bordered border-2 border-spacing-y-2 border-rounded border-gray-500"
          />
          <input
            required
            name="socialSecurityNumber"
            placeholder="Social Security Number"
            className="mb-3 w-full input input-bordered border-2 border-spacing-y-2 border-rounded border-gray-500"
          />
          <input
            required
            name="carModel"
            placeholder="Car Model"
            type="url"
            className="mb-3 w-full input input-bordered border-2 border-spacing-y-2 border-rounded border-gray-500"
          />
        </form>
      </div>
    </div>
  );
}
