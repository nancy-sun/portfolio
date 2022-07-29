import React, { useRef } from "react";
import ProjectPlane from "../ProjectsPlane/ProjectsPlane";
import { projects } from '../../data/projectsData';
import liteChatImg from "../../assets/projects/liteChat.png";
import liteChatImgB from "../../assets/projects/liteChatB.png";
import hackathonImg from "../../assets/projects/industryHackathon.png";
import hackathonImgB from "../../assets/projects/industryHackathonB.png";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ScrollControls, Scroll } from "@react-three/drei";


function ProjectsScrolls() {
    const { viewport } = useThree();

    return (
        <ScrollControls damping={6} pages={projects.length}>
            <Scroll>
                <ProjectPlane project={projects[0]} img={liteChatImg} imgB={liteChatImgB} position={[0, viewport.height / 8, 0]} />
                <ProjectPlane project={projects[0]} img={liteChatImg} imgB={liteChatImgB} position={[0, -viewport.height / 1, 0]} />
                <ProjectPlane project={projects[2]} img={hackathonImg} imgB={hackathonImgB} position={[0, -viewport.height / 0.53, 0]} />
            </Scroll>
        </ScrollControls>
    )
}

export default ProjectsScrolls