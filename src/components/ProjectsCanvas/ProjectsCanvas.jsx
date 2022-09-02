import React from "react";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import ProjectsScrolls from '../ProjectsScrolls/ProjectsScrolls';
import Background from "../Background/Background";
import "./ProjectsCanvas.scss";


function ProjectsCanvas() {
    const theme = useSelector((state) => state.darkTheme);

    return (
        <Canvas className="canvas">
            <ambientLight intensity={theme ? 1.6 : 1.7} />
            <ProjectsScrolls />
            <Background theme={theme} />
        </Canvas>
    )
}

export default ProjectsCanvas;