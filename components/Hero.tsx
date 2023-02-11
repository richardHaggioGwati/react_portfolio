'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Guy who loves coffee.tsx',
      'Breathes code.',
      'ButLovesBugsMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  console.log('🚀 ~ file: Hero.tsx:18 ~ Hero ~ count', count);
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/self.png"
        alt="profile picture"
        height={150}
        width={150}
        className="relative rounded-full object-contain"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#651ef4" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton" type="button">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton" type="button">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton" type="button">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton" type="button">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
