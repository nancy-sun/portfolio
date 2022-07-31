import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import AboutTextGroup from "../AboutTextGroup/AboutTextGroup";
import Background from "../Background/Background";

function AboutCanvas() {
    const theme = useSelector((state) => state.darkTheme);

    return (
        <Canvas className="canvas" camera={{ fov: 70, position: [-1, 0, 0] }}>
            <OrbitControls
                maxDistance={30}
                minDistance={12}
                minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.8}
                minAzimuthAngle={-Math.PI / 11}
                maxAzimuthAngle={Math.PI / 9}
                enablePan={false}
            />
            <directionalLight position={[3, 10, 3]} />
            <ambientLight intensity={theme ? 0.6 : 0.8} />
            <AboutTextGroup />
            <Background theme={theme} />
        </Canvas>
    )
}

export default AboutCanvas;