import { AspectRatio } from '../../ui/aspect-ratio';
import Image from '../../../assets/car.png';

export default function InfoCards() {
  return (
    <>
      <div className="flex items-center justify-center text-3xl font-bold py-7">
        What we do?
      </div>
      <div className="flex gap-2 justify-center px-20">
        <div className="flex flex-1 flex-col max-w-1/4">
          <AspectRatio className="max-h-4">
            <img src={Image} alt="" />
          </AspectRatio>
        </div>
        <div className="flex flex-1 flex-col max-w-1/4 bg-secondary rounded-lg">
          <div className="mx-auto text-lg font-bold py-4">
            The future of financial management
          </div>
          <div className="mx-auto italic max-w-sm">
            SafeCare is a cutting-edge project that strives to bridge the gap
            between the red tape and opaque policies that Insurance companies &
            Banks have and the people
          </div>
          <div className="mx-auto text-lg font-bold py-4">
            What sets us apart ?
          </div>
          <div className="mx-auto italic max-w-sm">
            In order for us to tackle the task we implement the most powerful
            weapon in our arsenal - technology. By utilizing self-learning
            algorithms for tackling Big Data analisis powered by machine
            learning.
          </div>
          <div className="mx-auto text-lg font-bold py-4">
            Our priority - customer satisfaction
          </div>
          <div className="mx-auto italic max-w-sm">
            In this day and age in the financial sector the companies that care
            for the customer, though cherished, are few and far between. In
            order for us to be on top of our game - we will strive for our core
            principles: Customer satisfaction , transperancy of information and
            facilitating the user experience.
          </div>
        </div>
      </div>
    </>
  );
}
