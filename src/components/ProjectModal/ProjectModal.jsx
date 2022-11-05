import React from "react";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./ProjectModal.scss";

function ProjectModal({ open, handleClose, project, theme }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
            BackdropProps={{ invisible: true }}
        >
            <Box className="modal__box"
                style={{ backgroundColor: theme ? "rgb(17, 17, 17)" : "rgb(240, 248, 255)" }}
            >
                <div className="modal__title">
                    <h1 className="modal__name">{project.name}</h1>
                    <a href={project.github} target="_blank" rel="noreferrer" className="modal__github"> </a>
                </div>
                <p className="modal__description">{project.description}</p>
                <p className="modal__tech">{project.tech}</p>
            </Box>
        </Modal>
    );
};

export default ProjectModal;