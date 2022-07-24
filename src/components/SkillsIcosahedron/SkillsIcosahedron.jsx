import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, RenderTexture, Icosahedron } from "@react-three/drei";
import * as THREE from 'three';


function SkillsIcosahedron(props) {

    const texture = useLoader(THREE.TextureLoader, props.texture)


    return (
        <mesh rotation-y={1.7} {...props}>
            <Icosahedron>
                <meshBasicMaterial attach="material" map={texture} />
            </Icosahedron>
        </mesh>
    )
}

export default SkillsIcosahedron;