import React from "react";
import ProjectPlane from "../ProjectsPlane/ProjectsPlane";
import liteChatImg from "../../assets/projects/liteChat.png";
import liteChatImgB from "../../assets/projects/liteChatB.png";
import hackathonImg from "../../assets/projects/industryHackathon.png";
import hackathonImgB from "../../assets/projects/industryHackathonB.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import portfolioImgB from "../../assets/projects/portfolioB.png";
import { useThree } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import projects from "../../data/projectsData.json";

function ProjectsScrolls() {
    const { viewport } = useThree();

    return (
        <ScrollControls damping={6} pages={projects.length}>
            <Scroll>
                <ProjectPlane project={projects[0]} img={liteChatImg} imgB={liteChatImgB} position={[0, viewport.height / 8, 0]} />
                <ProjectPlane project={projects[1]} img={portfolioImg} imgB={portfolioImgB} position={[0, -viewport.height / 1.1, 0]} />
                <ProjectPlane project={projects[2]} img={hackathonImg} imgB={hackathonImgB} position={[0, -viewport.height / 0.53, 0]} />
            </Scroll>
        </ScrollControls>
    )
}

export default ProjectsScrolls;