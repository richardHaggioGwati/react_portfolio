'use client';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/richard-gwati-636a80233/"
          className="hover:scale-125"
          fgColor="#fcfbfe"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/richardHaggioGwati"
          className="hover:scale-125"
          fgColor="#fcfbfe"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/"
          className="hover:scale-125"
          fgColor="#fcfbfe"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-[#1c1e2c]"
      >
        {/* Email */}
        <Link href="mailto:haggio0844@gmail.com">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#fcfbfe"
            bgColor="transparent"
          />
        </Link>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
