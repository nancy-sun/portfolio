import React from "react";
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import { useBox } from "@react-three/cannon";
import { clickSkills } from "../../utils/utils";


function SkillsCube(props) {
    const [ref, api] = useBox(() => ({
        mass: 12, position: [0, 2, 0], ...props
    }));

    const texture = useLoader(THREE.TextureLoader, props.texture);

    return (
        <mesh
            rotation-y={-1.3}
            {...props}
            ref={ref}
            onClick={(e) => clickSkills(e, api)}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={texture} />
        </mesh >
    )
}

export default SkillsCube;