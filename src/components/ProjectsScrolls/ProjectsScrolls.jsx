import React, { useRef } from "react";
import ProjectPlane from "../ProjectsPlane/ProjectsPlane";
import { projects } from '../../data/projectsData';
import liteChatImg from "../../assets/projects/liteChat.png";
import liteChatImgB from "../../assets/projects/liteChatB.png";
import hackathonImg from "../../assets/projects/industryHackathon.png";
import hackathonImgB from "../../assets/projects/industryHackathonB.png";
import * as THREE from "three";
import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";



function ProjectsScrolls() {

    return (
        <ScrollControls damping={6} pages={projects.length}>
            <Scroll>
                <ProjectPlane project={projects[0]} img={liteChatImg} imgB={liteChatImgB} position={[0, 0, 0]} />
                <ProjectPlane project={projects[2]} img={hackathonImg} imgB={hackathonImgB} position={[0, -16, 0]} />
            </Scroll>
        </ScrollControls>
    )
}

export default ProjectsScrolls