import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import ProjectsScrolls from '../ProjectsScrolls/ProjectsScrolls';
import Background from "../Background/Background";
import * as THREE from 'three';
import "./ProjectsCanvas.scss";


function ProjectsCanvas() {
    const theme = useSelector((state) => state.darkTheme);

    const touches = {
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN,
    }

    return (
        <Canvas className="canvas">
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enablePan={true}
                touches={touches}
                panSpeed={2}
            />
            <ambientLight intensity={theme ? 1.6 : 1.7} />
            <ProjectsScrolls />
            <Background theme={theme} />
        </Canvas>
    )
}

export default ProjectsCanvas;