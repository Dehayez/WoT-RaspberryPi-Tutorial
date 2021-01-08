import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { useControl } from "react-three-gui";

import { Arcade_Machine, LightingStudio, Sparks } from "../../components";

export default () => {
  const components = [
    "Arcade_Machine",
  ];

  const lightings = [
    "Studio Lighting",
  ];

  const useComponent = useControl("Component", {
    group: "General",
    type: "select",
    value: components[0],
    items: components,
  });
  const useLighting = useControl("Lighting", {
    group: "General",
    type: "select",
    value: lightings[0],
    items: lightings,
  });

  function showLighting(name) {
    return useLighting === name;
  }

  function showComponent(name) {
    return useComponent === name;
  }

  const mouse = useRef([0, 0])


  return (
    <>
      {showLighting("Studio Lighting") && <LightingStudio />}
      {true && (
        <Suspense fallback={null}>
          {showComponent("Arcade_Machine") && <Arcade_Machine />}
          {true && <Sparks count={5} mouse={mouse} colors={['#7249C9', '#FCEEB5', '#7249C9', 'lightblue', 'red']} />}
        </Suspense>
      )}
    </>
  );
};

