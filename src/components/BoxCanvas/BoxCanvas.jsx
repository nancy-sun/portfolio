import React, { Suspense } from 'react';
import Box from '../Box/Box';
import { Canvas } from "@react-three/fiber";
import "./BoxCanvas.scss";
import { OrbitControls, RoundedBox, meshPhongMaterial } from "@react-three/drei";

function BoxCanvas() {

    return (
        <Canvas className="canvas">
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <directionalLight position={[12, 15, 5]} />
            <Box />

        </Canvas>
    )
}

export default BoxCanvas;