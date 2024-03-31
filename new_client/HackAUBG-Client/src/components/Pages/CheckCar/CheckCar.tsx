import styles from "../../../assets/style";
import { Input } from "../../ui/input";
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
      const result = await axios.get<carEntity>("/api");
      setCarData(result.data);
      console.log(carData);
    } catch (error) {
      return redirect("/NotFound");
    }
  };
  return (
    <div
      className={`${styles.pageMargin} ${styles.pageWidth} flex items-center gap-2 w-1/2 mt-4`}
    >
      <div className="flex flex-col flex-1">
        <div>Header</div>
        <div>Data</div>
      </div>
      <div className="flex flex-col flex-1 items-center h-[300px] bg-card rounded-lg">
        <div className="font-bold text-2xl">Check a car</div>
        <div className="flex flex-col flex-auto mt-2 items-start">
          <label className="underline text-md">Car Number:</label>
          <Input></Input>
          <Button
            className="bg-accent text-accent-foreground mt-2"
            onClick={sendRequest}
          >
            Check!
          </Button>
        </div>
      </div>
    </div>
  );
}
