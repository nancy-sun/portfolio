import React from "react";
import { Html } from "@react-three/drei";
import projectsData from "../../data/projectsData.json";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./ProjectsList.scss";

function ProjectsList({ theme }) {

    return (
        <Html className="projects__list-wrap" style={{ transform: "translate(-50%, -50%)", zIndex: 1 }}>
            <div className="projects__list">
                {projectsData.map((project) =>
                    <ProjectItem key={project.name} project={project} theme={theme} />
                )}
            </div>
        </Html>
    );
};

export default ProjectsList;