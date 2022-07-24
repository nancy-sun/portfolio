import React from "react";
import { useLoader } from '@react-three/fiber'
import { Sphere } from "@react-three/drei";
import * as THREE from 'three';



function SkillsSphere(props) {
    console.log(props)

    // const textRef = useRef();
    // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

    const texture = useLoader(THREE.TextureLoader, props.texture);

    return (
        <mesh rotation-y={-1.3} {...props}>
            <Sphere>
                {/* <boxBufferGeometry /> */}
                <meshStandardMaterial map={texture} />
            </Sphere>
        </mesh >
    )
}

export default SkillsSphere;