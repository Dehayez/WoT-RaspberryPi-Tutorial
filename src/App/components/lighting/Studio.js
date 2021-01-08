import React from "react";

export default () => {
  return (
    <group>
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow={true}
        color="hsl(0, 0%, 100%)"
        intensity={0.4}
        position={[0, 2, 4]}
      />
      <directionalLight
        castShadow={true}
        color="hsl(259, 100%, 70%)"
        position={[4, 0, 0]}
      />
      <directionalLight
        castShadow={true}
        color="hsl(259, 100%, 70%)"
        position={[-4, 0, 0]}
      /> 
    </group>
  );
};
