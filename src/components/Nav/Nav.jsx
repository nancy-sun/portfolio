import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";
import { toggleTheme } from "../../reducers/themeSlice";
import { useSelector, useDispatch } from "react-redux";

import "./Nav.scss";

function Nav() {

    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <nav className="nav">
            <NavLink to="/" className="nav__logo">N</NavLink>
            <div className="nav__list">
                <NavLink to="/" className="nav__item--active">Home</NavLink>
                <NavLink to="/about" className={isActive =>
                    "nav__item" + (isActive ? " nav__item--active" : null)
                }
                    style={({ isActive }) => isActive ? { color: "green" } : {}}
                >About</NavLink>
                <NavLink to="/projects" className={isActive =>
                    "nav__item" + (isActive ? " nav__item--active" : null)}>Projects</NavLink>
                <NavLink to="/skills" className={isActive =>
                    "nav__item" + (isActive ? " nav__item--active" : null)}>Skills</NavLink>
                <NavLink to="/contact" className={isActive =>
                    "nav__item" + (isActive ? " nav__item--active" : null)}>Contact</NavLink>
                <FormGroup>
                    <FormControlLabel control={<Switch checked={theme.darkTheme} onChange={() => dispatch(toggleTheme())} />} />
                </FormGroup>
            </div>
        </nav >
    )
}

export default Nav;