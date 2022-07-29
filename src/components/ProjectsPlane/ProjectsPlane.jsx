import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { Html, RenderTexture, MeshDistortMaterial, useCursor, useTexture } from '@react-three/drei'
import * as THREE from 'three';
import "./ProjectsPlane.scss";

function ProjectPlane({ project, img }) {
    const { viewport } = useThree();
    console.log(viewport)
    const [hovered, hover] = useState(false);
    useCursor(hovered);
    const ref = useRef()


    const texture = useLoader(THREE.TextureLoader, img);
    useFrame(() => {
        ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
    })



    return (
        <mesh
            scale={viewport.width > 8 ?
                [(viewport.width / 1.8), (viewport.width / 2.9), 1]
                : [(viewport.width / 1.2), (viewport.width / 2), 1]}
            onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
            position={project.position}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
            <MeshDistortMaterial
                map={texture}
                attach="material" opacity={1} ref={ref} speed={2}>

            </MeshDistortMaterial>
            <Html>
                <h1 className="project__name">{project.name}</h1>
            </Html>
        </mesh >
    )
};

export default ProjectPlane;