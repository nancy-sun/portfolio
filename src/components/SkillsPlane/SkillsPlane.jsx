import React from "react";
import { usePlane } from "@react-three/cannon";

function SkillsPlane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));

    return (
        <mesh ref={ref}>
            <planeGeometry />
            <meshLambertMaterial attach="material" opacity={0} transparent />
        </mesh>
    );
};

export default SkillsPlane;