import React from "react";
import { extend, useThree } from "@react-three/fiber";
import AboutText from "../AboutText/AboutText";
// import "./AboutTextGroup.scss";

function AboutTextGroup() {
    const { viewport, size } = useThree();

    const mobileScale = [viewport.width / 1.2, viewport.width / 1.8, 1];
    const tabScale = [viewport.width / 2.1, viewport.width / 3.25, 1];

    const about1 = "I'm Nancy,";
    const about2 = "a passionate developer";
    const about3 = "&";
    const about4 = "self-motivated learner.";

    return (
        <group scale={size.width > 768 ? 1 : 0.5} position={size.width > 768 ? [-1.5, 0, 0] : [-1.3, 0, 0]} className="about__text">
            <AboutText text={about1} position={[-2, 2.5, 0]} />
            <AboutText text={about2} position={[-4, 0.5, 0]} />
            <AboutText text={about3} position={[0, -1, 0]} />
            <AboutText text={about4} position={[-4, -2.5, 0]} />
        </group>
    )
}

export default AboutTextGroup;