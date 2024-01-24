import Image from '../atomos/Image';
import Imagender from '../../../public/imgder.png';
import Imagenizq from '../../../public/imgizq.png';

function AboutUsLeft() {
  return (
    <div className="flex justify-center items-center space-x-8 relative">
      <div className="w-1/4">
        <Image src={Imagender} alt="img derecha" />
      </div>

      <div className="w-1/4">
        <Image src={Imagenizq} alt="img izquierda" />
      </div>
    </div>
  );
}

export default AboutUsLeft;
