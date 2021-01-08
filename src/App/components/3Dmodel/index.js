import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

import logo from "./Arcade_Machine.glb";


export default () => {

  const gltf = useGLTF(logo, true);
  const logoRef = useRef();
  const speed = 0.001;

  useFrame(({clock}) => {
    logoRef.current.rotation.x += speed * Math.sin(clock.getElapsedTime());
    logoRef.current.rotation.y += speed * Math.sin(clock.getElapsedTime());
    logoRef.current.position.x += speed * Math.sin(clock.getElapsedTime());
    logoRef.current.position.z += speed * Math.sin(clock.getElapsedTime());
  });

  return (
    <primitive
      ref={logoRef}
      object={gltf.scene}
      position={[0, -2, 0]}
      rotation={[0, -2, 0]}
      scale={[0.8, 0.8, 0.8]}
    />
  );
};
