import React, { Suspense } from 'react';
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Cloud, Sky, Stars, PerspectiveCamera } from "@react-three/drei";
import { useSelector } from "react-redux";
import "./ProjectsCanvas.scss";
import ProjectPlane from "../ProjectsPlane/ProjectsPlane";
import { projects } from '../../data/projectsData';
import liteChatImg from "../../assets/projects/liteChat.png";
import hackathonImg from "../../assets/projects/industryHackathon.png";





function ProjectsCanvas() {
    const theme = useSelector((state) => state.theme);



    return (
        <Canvas className="canvas" dpr={[6, 7]}>
            <ambientLight intensity={theme.darkTheme ? 1 : 1.7} />
            <ScrollControls damping={6} pages={projects.length}>
                <Scroll style={{ width: '100%' }}>
                    <ProjectPlane project={projects[0]} img={liteChatImg} />
                    <ProjectPlane project={projects[2]} img={hackathonImg} />
                </Scroll>

            </ScrollControls>
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

export default ProjectsCanvas;