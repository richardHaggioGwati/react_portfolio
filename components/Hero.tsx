'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei';
import Modal from './Modal';

const Home = () => {
  return (
    <>
      <div className="bg" />
      <h1 className="absolute top-[120px] left-[60px] font-black text-7xl m-0 text-[peru] leading-12 tracking-wide text-left">
        Prepare
        <span className="whitespace-pre text-[0.4em]"> for</span>
        <br />
        <span>Blast off...</span>
      </h1>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={['#060606', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Modal url="/scene.glb" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none" />
      <Loader />
    </>
  );
};

export default Home;
