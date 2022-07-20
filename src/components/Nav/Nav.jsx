import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__logo">N</div>
            <div className="nav__list">
                <NavLink to="/project" className="nav__item">Projects</NavLink>
                <NavLink to="/skills" className="nav__item">Skills</NavLink>
                <NavLink to="/contact" className="nav__item">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Nav;