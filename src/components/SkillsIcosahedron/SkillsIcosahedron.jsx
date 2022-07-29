import React from "react";
import { useLoader } from '@react-three/fiber'
import { Icosahedron } from "@react-three/drei";
import * as THREE from 'three';
import { useBox } from "@react-three/cannon";
import { clickSkills } from "../../utils/utils";

function SkillsIcosahedron(props) {

    const texture = useLoader(THREE.TextureLoader, props.texture);
    const [ref, api] = useBox(() => ({
        mass: 12, position: [0, 2, 0], ...props
    }));

    return (
        <mesh rotation-y={-3} {...props}
            ref={ref}
            onClick={(e) => clickSkills(e, api)}>
            <Icosahedron>
                <meshStandardMaterial attach="material" map={texture} metalness={0.7} />
            </Icosahedron>
        </mesh>
    )
}

export default SkillsIcosahedron;