'use client';

import { motion } from 'framer-motion';

const ExperienceCard: React.FC = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#2a2d42] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/self.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Instagram</h4>
        <p className="font-bold text-2xl mt-1">Web clone</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... -Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
