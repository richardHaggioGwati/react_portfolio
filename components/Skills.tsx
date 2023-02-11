'use client';

import { motion } from 'framer-motion';
import Skill from './Skill';

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center items-center xl:space-y-0"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase">
        Skills
      </h3>
      <h3 className="absolute top-36 tracking-[5px] text-gray-500 text-sm uppercase">
        Hover over skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
