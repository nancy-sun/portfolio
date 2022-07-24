import React from "react";
import { useLoader } from '@react-three/fiber'
import { Sphere, RenderTexture } from "@react-three/drei";
import * as THREE from 'three';



function SkillsCube(props) {
    console.log(props)

    // const textRef = useRef();
    // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

    const texture = useLoader(THREE.TextureLoader, props.texture);

    return (
        <mesh rotation-y={-1.3} {...props}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={texture} />
            <RenderTexture attach="map" anisotropy={16}>
                <color attach="background" args={["white"]} />
            </RenderTexture>
        </mesh >
    )
}

export default SkillsCube;