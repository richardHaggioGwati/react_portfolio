/* eslint-disable react/jsx-one-expression-per-line */
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const progress = useProgress();

  return (
    <Html>
      <span className="canvas-load" />
      <p>{progress}%</p>
    </Html>
  );
};

export default Loader;
