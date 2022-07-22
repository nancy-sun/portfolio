import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, RenderTexture, RoundedBox, Sphere, Html } from "@react-three/drei";
import * as THREE from 'three';
import { toPage } from "../../utils/utils";


function HomeSphere() {

    // const textRef = useRef();
    // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))


    return (
        <mesh rotation-y={0} onClick={() => toPage("skills")}>
            <Sphere>
                <meshStandardMaterial attach="material" color="#a2d2ff" side={THREE.DoubleSide}>
                    <RenderTexture attach="map" anisotropy={16}>
                        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                        <color attach="background" args={["#a2d2ff"]} />
                        <ambientLight intensity={0.5} />
                        <Text fontSize={1} color="#555" letterSpacing={0.17}>
                            skills
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </Sphere>
        </mesh>
    )
}

export default HomeSphere;