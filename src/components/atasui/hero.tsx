import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-white dark:bg-black py-2 px-4 sm:px-8">
      <div className="z-10 flex min-h-[2rem] items-center justify-center">
      </div>
      <div className="relative w-full max-w-screen-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[656px] flex flex-col justify-center items-center mb-8">
        <div className="absolute inset-0">
          <Image
            src="/images/graident.webp"
            alt="Blurred background"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl sm:rounded-3xl blur-2xl"
            quality={100}
            style={{ willChange: 'filter' }}
          />
        </div>
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
            src="/images/atas.mp4"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
