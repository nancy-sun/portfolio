import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import ProjectsScrolls from '../ProjectsScrolls/ProjectsScrolls';
import Background from "../Background/Background";
import "./ProjectsCanvas.scss";

function ProjectsCanvas() {
    const theme = useSelector((state) => state.theme);

    return (
        <Canvas className="canvas">
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={theme.darkTheme ? 1.6 : 1.7} resize={2} />
            <ProjectsScrolls />
            <Background theme={theme} />
        </Canvas>
    )
}

export default ProjectsCanvas;