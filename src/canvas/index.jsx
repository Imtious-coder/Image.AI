/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber";

import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { Center, Environment } from "@react-three/drei";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in bg-red-600"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
      <Backdrop />
      <Center>
        <Shirt />
      </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
