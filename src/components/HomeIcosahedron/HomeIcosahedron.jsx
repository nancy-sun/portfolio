import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, RenderTexture, Icosahedron } from "@react-three/drei";
import * as THREE from 'three';
import { toPage } from "../../utils/utils";


function HomeIcosahedron() {

    return (
        <mesh rotation-y={0} onClick={() => toPage("projects")} >
            <Icosahedron>
                <meshStandardMaterial>
                    <RenderTexture attach="map" anisotropy={16}>
                        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 2]} />
                        <color attach="background" args={["#a2d2ff"]} />
                        <ambientLight intensity={0.5} />
                        <Text fontSize={0.4} color="#555">projects</Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </Icosahedron>
        </mesh>
    )
}

export default HomeIcosahedron;