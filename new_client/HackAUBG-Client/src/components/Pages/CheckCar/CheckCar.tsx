import { Button } from "../../ui/button";

import useAxios from "../../../utils/useAxios";
import { redirect } from "react-router-dom";
import { useState } from "react";

type carEntity = {
  carPlate: string;
  model: string;
  make: string;
};

export default function CheckCar() {
  const [carData, setCarData] = useState<carEntity | null>();
  const sendRequest = async (e: any) => {
    e.preventDefault();
    const axios = useAxios();
    try {
      const result = await axios.get<carEntity>("/endpoint");
      setCarData(result.data);
    } catch (error) {
      return redirect("/NotFound");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Enter Car Plate Numebr
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Car Plate Number
                    </label>
                  </div>
                  <div className="relative"></div>
                  <div className="relative">
                    <Button className="bg-accent text-white rounded-md px-2 py-1" onClick={sendRequest}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {carData ? (
          <div className="m-auto">
            <div className="flex flex-col min-w-[300px] rounded-lg shadow-lg">
              <div className="flex justify-around bg-gradient-to-r from-primary to-accent ">
                <div className="font-bold underline text-primary-foreground">
                  Data Name:
                </div>
                <div className="italic">Data</div>
              </div>
              <div className="flex justify-around bg-gradient-to-r from-primary to-accent">
                <div className="font-bold underline text-primary-foreground">
                  Data Name:
                </div>
                <div className="italic">Data</div>
              </div>
              <div className="flex justify-around bg-gradient-to-r from-primary to-accent">
                <div className="font-bold underline text-primary-foreground">
                  Data Name:
                </div>
                <div className="italic">Data</div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
