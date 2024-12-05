// DoctorModel.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
   const { scene } = useGLTF("/doctor.glb");
   return <primitive object={scene} scale={1} />;
}

const DoctorModel = () => {
   return (
      <Canvas style={{ height: "50vh", width: "450px" }}>
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 5]} intensity={1} />
         <Suspense fallback={null}>
            <Model />
         </Suspense>
         <OrbitControls enableZoom={true} />
      </Canvas>
   );
};

export default DoctorModel;
