import React, { Suspense } from "react";
import * as THREE from "three";
import { useControl } from "react-three-gui";

import { GlTransmissionFormat, LightingStudio, } from "../../components";

export default () => {
  const components = [
    "GlTransmissionFormat",
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

  return (
    <>
      {showLighting("Studio Lighting") && <LightingStudio />}
     
      {true && (
        <Suspense fallback={null}>
          {showComponent("GlTransmissionFormat") && <GlTransmissionFormat />}
        </Suspense>
      )}
    </>
  );
};

