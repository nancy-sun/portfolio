import React from "react";
import { extend } from "@react-three/fiber";
import typeface from "../../assets/aboutTypeface.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

function AboutText({ text, position }) {
    extend({ TextGeometry })
    const font = new FontLoader().parse(typeface);

    const textConfig = {
        font,
        size: 1,
        height: 0.7,
    };

    return (
        <mesh position={position}>
            <textGeometry args={[text, textConfig]} />
            <meshStandardMaterial metalness={1.3} roughness={0.55} color="#ffcad4" wireframe={text === "&" ? true : false} />
        </mesh>
    );
};

export default AboutText;