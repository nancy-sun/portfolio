import React, { Suspense } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Cloud, Sky, Stars } from "@react-three/drei";
import { useSelector } from "react-redux";
import AboutTextGroup from '../AboutTextGroup/AboutTextGroup';


function AboutCanvas() {
    const theme = useSelector((state) => state.theme);

    return (
        <Canvas className="canvas" camera={{ fov: 70, position: [-1, 0, 0] }}>
            <OrbitControls
                maxDistance={30}
                minDistance={12}
                minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.8}
                minAzimuthAngle={-Math.PI / 11}
                maxAzimuthAngle={Math.PI / 9}
            />
            <directionalLight position={[3, 10, 3]} />
            <ambientLight intensity={theme.darkTheme ? 0.4 : 0.8} />
            <AboutTextGroup />
            {theme.darkTheme ?
                (<Stars radius={120} depth={90} count={4000} factor={4} saturation={100} speed={0.7} />) :
                (<Suspense fallback={null}>
                    <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, 1]} speed={0.2} opacity={0.3} />
                    <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
                </Suspense>)
            }
        </Canvas>
    )
}

export default AboutCanvas;