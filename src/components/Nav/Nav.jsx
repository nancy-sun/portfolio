import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, FormGroup, FormControlLabel, useMediaQuery } from "@mui/material";
import { toggleTheme } from "../../reducers/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Nav.scss";

function Nav() {
    const theme = useSelector((state) => state.darkTheme);
    const dispatch = useDispatch();
    const isLgScreen = useMediaQuery("(min-width:768px)");

    console.log(isLgScreen)

    return (
        <div className="nav-wrap">
            <nav className="nav">
                <NavLink to="/" className="nav__logo">N</NavLink>
                <div className="nav__list-wrap">
                    <div className="nav__list">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "nav__item--active" : "nav__item"}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "nav__item--active" : "nav__item"}>About</NavLink>
                        <NavLink to="/projects" className={({ isActive }) =>
                            isActive ? "nav__item--active" : "nav__item"}>Projects</NavLink>
                        <NavLink to="/skills" className={({ isActive }) =>
                            isActive ? "nav__item--active" : "nav__item"}>Skills</NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "nav__item--active" : "nav__item"}>Contact</NavLink>
                    </div>
                    <FormGroup className="nav__control">
                        <FormControlLabel control={<Switch size={isLgScreen ? "medium" : "small"} checked={theme} onChange={() => dispatch(toggleTheme())} />} />
                    </FormGroup>
                </div>
            </nav>
        </div>
    );
};

export default Nav;