import React, { Suspense } from 'react';
import Box from '../Box/Box';
import HomeSphere from '../HomeSphere/HomeSphere';
import HomeIcosahedron from "../HomeIcosahedron/HomeIcosahedron";
import { Canvas } from "@react-three/fiber";
import "./HomeCanvas.scss";
import { OrbitControls, ContactShadows, Cloud, Sky, Stars } from "@react-three/drei";

function HomeCanvas() {

    return (
        <Canvas className="canvas" >
            <ambientLight intensity={0.6} />
            <directionalLight position={[12, 15, 3]} />
            <OrbitControls maxDistance={10} minDistance={1.4}
                // autoRotateSpeed={-3.3} autoRotate
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
            <ContactShadows position={[0, -0.8, 0]} frames={1} scale={10} far={3} blur={1} opacity={0.75} />
            <ContactShadows position={[0, -0.8, 0]} frames={1} scale={10} far={3} blur={3} color="black" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Box />
            {/* <Suspense fallback={null}>
                <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
                <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
                <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
                <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.7} />
                <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
            </Suspense> */}
        </Canvas>
    )
}

export default HomeCanvas;