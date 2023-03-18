'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import style from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'From frontend finesse to backend brilliance, I am the full stack developer you need!',
      "One developer, all the skills. That's the power of full stack!",
      "Turning complex code into seamless solutions - that's what I do as a full stack developer!",
      'As a full stack developer, I bring your digital dreams to life!',
      "Frontend, backend, and everything in between - I've got you covered as a full stack developer!",
      "Building the web from top to bottom - that's my full stack superpower!",
      "Coding with a 360-degree view - that's the beauty of full stack development!",
      'No task too big or too small - I handle it all as a full stack developer!',
      "The complete package - that's what you get with a full stack developer like me!",
      "In the world of web development, I'm the full stack hero you've been looking for!",
      'Why settle for half a developer when you can have the full stack experience?',
      'So what are you waiting for, get the full stack experience right now!',
    ],
    loop: true,
    delaySpeed: 2500,
    typeSpeed: 80,
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#651ef4]" />
          <div className="w-1 sm-h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="text-[#dfd9ff] font-bold lg:text-[60px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            Hi, I&apos;m
            <span className="text-[#5500ff]"> Richard</span>
          </h1>
          <p className={`${style.heroSubText} mt-8 text-white-100`}>
            {text}
            <Cursor cursorColor="#651ef4" />
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
