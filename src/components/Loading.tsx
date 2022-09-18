import Image from 'next/image';
import loading from '../../public/loading.gif';

const Loading = () => {
  return (
      <div className="h-screen w-screen flex justify-center text-2xl items-center">
        <Image
          layout="fixed"
          width={200}
          height={200}
          src={loading}
          alt="Loading Sprite"
        ></Image>
      </div>
  );
};

export default Loading;
