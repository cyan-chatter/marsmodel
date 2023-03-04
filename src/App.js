// "models/mars.glb"

import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./styles.css";

import { CameraControls, Sphere, SkyBox } from "./components";
import { ModelViewer } from "./components";

// const App = () => {
//   return (
//     <>
//       <Canvas className="canvas">
//         <CameraControls />
//         <directionalLight intensity={1} />
//         <ambientLight intensity={0.6} />
//         <Suspense fallback="loading">
//           <Sphere />
//         </Suspense>
//         <SkyBox />
//       </Canvas>
//     </>
//   );
// };

const App = () => {
  return (
    <>
      <ModelViewer scale="40" modelPath={"/models/mrs_new.glb"} />
    </>
  );
};

export default App;
