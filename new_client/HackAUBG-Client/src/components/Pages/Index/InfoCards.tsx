import { AspectRatio } from '../../ui/aspect-ratio';
import Image from '../../../assets/car.png';

export default function InfoCards() {
  return (
    <>
      <div className="flex items-center justify-center">What we do?</div>
      <div className="flex gap-2 justify-center px-16">
        <div className="flex flex-1 flex-col max-w-1/4">
          <AspectRatio className="max-h-4">
            <img src={Image} alt="" />
          </AspectRatio>
        </div>
        <div className="flex flex-1 flex-col max-w-1/4">
          <div className="mx-auto">Head</div>
          <div className="mx-auto">Contet</div>
        </div>
      </div>
    </>
  );
}
