import React, { Suspense } from 'react';
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, Cloud, Sky, Stars, OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import "./ProjectsCanvas.scss";
import ProjectsScrolls from '../ProjectsScrolls/ProjectsScrolls';



function ProjectsCanvas() {
    const theme = useSelector((state) => state.theme);


    return (
        <Canvas className="canvas">
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={theme.darkTheme ? 1 : 1.7} resize={2} />
            <ProjectsScrolls />
            {theme.darkTheme ?
                (<Stars radius={120} depth={90} count={4000} factor={4} saturation={100} speed={0.7} />) :
                (<Suspense fallback={null}>
                    <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, 1]} speed={0.2} opacity={0.3} />
                    <Sky azimuth={0.1} turbidity={10} rayleigh={0.3} inclination={0.58} distance={1000} />
                </Suspense>)
            }
        </Canvas>
    )
}

export default ProjectsCanvas;