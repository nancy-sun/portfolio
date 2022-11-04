import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectItem.scss";

function ProjectItem({ project, theme }) {
    console.log(project)
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ProjectModal handleClose={handleClose} open={open} project={project} theme={theme} />
            <div onClick={handleOpen} className="project">
                <div className="project__img"></div>
                <div className="project__title">
                    {/* <p className="project__text">{project.title}</p> */}
                    <p className="project__type">dolor sit adipisicing </p>
                    <p className="project__name">Lorem ipsum dolor sit adipisicing </p>
                </div>
            </div>
        </>
    );
};

export default ProjectItem;