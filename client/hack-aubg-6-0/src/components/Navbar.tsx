import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-center items- bg-primary">
      <div className="flex bg-blue-200 justify-between items-start w-4/5">
        <div>ikonka</div>
        <div className="flex flex-row">
          <div className="flex px-3 py-2 border border-transparent rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 m-2">
            <h2>One</h2>
          </div>
          <div className="flex px-3 py-2 border border-transparent rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 m-2">
            <h2>Two</h2>
          </div>
          <div className="flex px-3 py-2 border border-transparent rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 m-2">
            <h2>Three</h2>
          </div>
        </div>
        <div>login</div>
      </div>
    </div>
  );
}
