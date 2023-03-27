'use client';

import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import NavbarToggle from './NavbarToggle';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div id="menu">
        <NavbarToggle />
        <div id="menu-arcs-wrapper">
          <Canvas>
            <Stars radius={500} depth={50} count={30000} factor={10} />
          </Canvas>
          <svg id="menu-arcs">
            <circle className="menu-arc" cx="50%" cy="50%" r="18%" />
            <circle className="menu-arc" cx="50%" cy="50%" r="30%" />
            <circle className="menu-arc" cx="50%" cy="50%" r="42%" />
          </svg>
        </div>
        <div id="menu-links">
          <Link className="link" rel="noreferrer" href="space">
            <span className="anchor" />
            <span className="index">01</span>
            <span className="label">Space</span>
          </Link>
          <Link
            className="link"
            rel="noreferrer"
            href="https://www.youtube.com/c/Hyperplexed"
          >
            <span className="anchor" />
            <span className="index">02</span>
            <span className="label">Planet</span>
          </Link>
          <Link
            className="link"
            rel="noreferrer"
            href="https://www.youtube.com/c/Hyperplexed"
          >
            <span className="anchor" />
            <span className="index">03</span>
            <span className="label">Satellite</span>
          </Link>
          <Link
            className="link"
            rel="noreferrer"
            href="https://www.youtube.com/c/Hyperplexed"
          >
            <span className="anchor" />
            <span className="index">04</span>
            <span className="label">Asteroid</span>
          </Link>
        </div>
      </div>

      <div id="content">
        <p>Update required prefer fish in space</p>
      </div>

      <Link
        id="source-link"
        rel="noreferrer"
        className="meta-link"
        href="/"
      >
        <i className="fa-solid fa-link" />
        <span>Navigation</span>
      </Link>
    </>
  );
};

export default Navbar;
