import React from "react";
import { useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { clickSkills } from "../../utils/utils";

function SkillsSphere(props) {

    const [ref, api] = useBox(() => ({
        mass: 12, position: [0, 2, 0], ...props
    }));

    const texture = useLoader(THREE.TextureLoader, props.texture);

    return (
        <mesh rotation-y={-3} {...props} ref={ref}
            onClick={(e) => clickSkills(e, api)}>
            <Sphere>
                <meshStandardMaterial map={texture} metalness={0.7} />
            </Sphere>
        </mesh >
    );
};

export default SkillsSphere;