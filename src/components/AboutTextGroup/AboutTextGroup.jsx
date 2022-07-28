import React from "react";
import { extend, useThree } from "@react-three/fiber";
import AboutText from "../AboutText/AboutText";
// import "./AboutTextGroup.scss";

function AboutTextGroup() {
    const { viewport } = useThree();
    const about1 = "I'm Nancy,";
    const about2 = "a passionate developer";
    const about3 = "&";
    const about4 = "self-motivated learner.";

    return (
        <group scale={viewport.width < 15 ? 0.67 : 1.5} position={[-1.5, 0, 0]} className="about__text">
            <AboutText text={about1} position={[-2, 2.5, 0]} />
            <AboutText text={about2} position={[-4, 0.5, 0]} />
            <AboutText text={about3} position={[0, -1, 0]} />
            <AboutText text={about4} position={[-4, -2.5, 0]} />
        </group>
    )
}

export default AboutTextGroup;