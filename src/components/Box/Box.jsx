import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, RenderTexture, RoundedBox, Sphere } from "@react-three/drei";
import * as THREE from 'three';
// import one from "../../assets/textures/one.jpg"
// import two from "../../assets/textures/two.jpg"
// import three from "../../assets/textures/three.jpg"


function Box() {

    // const texture_1 = useLoader(THREE.TextureLoader, one)
    // const texture_2 = useLoader(THREE.TextureLoader, two);
    // const texture_3 = useLoader(THREE.TextureLoader, three);



    const toSkills = (e) => {
        window.location.replace("/skills");
    }

    // const textRef = useRef();
    // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))



    return (
        <mesh rotation-y={0} onClick={toSkills}>
            {/* <boxGeometry args={[1, 1, 1]} attach="geometry" /> */}
            <Sphere>
                <meshStandardMaterial attach="material" color="#a2d2ff" side={THREE.DoubleSide}>
                    <RenderTexture attach="map" anisotropy={16}>
                        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                        <color attach="background" args={["#a2d2ff"]} />
                        <ambientLight intensity={0.5} />
                        <Text fontSize={1} color="#555">
                            skills
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </Sphere>
            {/* <RoundedBox>
                <RenderTexture attach="map" anisotropy={16}>
                    <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                    <color attach="background" args={["#a2d2ff"]} />
                    <ambientLight intensity={0.5} />
                    <Text fontSize={1} color="#555">
                        projects
                    </Text>
                </RenderTexture>
            </RoundedBox> */}
        </mesh>
    )
}

export default Box;