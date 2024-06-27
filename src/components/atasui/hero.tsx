import React from 'react';
import Image from 'next/image';
import AnimatedGradientText from './animated-gradient-text';
import { cn } from '@/lib/utils';
import { RiNextjsFill } from "react-icons/ri";
import { useTranslations } from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-white dark:bg-black py-2 px-4 sm:px-8">
      <div className="z-10 flex min-h-[2rem] items-center justify-center">
      <div className="z-10 flex min-h-[8rem] items-center justify-center">
          <AnimatedGradientText>
            <RiNextjsFill size={30} />

            <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
            >
              {t('starter')}
            </span>
          </AnimatedGradientText>
        </div>
      </div>
      <span className="text-6xl text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-geist leading-none text-transparent dark:from-white dark:to-black bg-clip-text text-transparent px-4 py-4">
        {t('hello')} 👋
      </span>
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
            src="/vercel.mp4"
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
