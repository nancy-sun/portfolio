import React, { Suspense } from 'react';
import Box from '../Box/Box';
import { Canvas } from "@react-three/fiber";
import "./BoxCanvas.scss";
import { OrbitControls, ContactShadows } from "@react-three/drei";

function BoxCanvas() {

    return (
        <Canvas className="canvas">
            <ambientLight intensity={0.6} />
            <directionalLight position={[12, 15, 3]} />
            <OrbitControls autoRotateSpeed={3} autoRotate />
            {/* <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
            <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="black" /> */}
            <Box />

        </Canvas>
    )
}

export default BoxCanvas;