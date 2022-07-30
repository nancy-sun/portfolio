import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { Html, RenderTexture, MeshDistortMaterial, useCursor, Text, useTexture, Plane } from '@react-three/drei'
import * as THREE from 'three';
import "./ProjectsPlane.scss";




function ProjectPlane({ project, img, imgB, position }) {
    const [hovered, hover] = useState(false);
    useCursor(hovered);
    const frontRef = useRef()
    const backRef = useRef()
    const { viewport, size } = useThree();
    const textureB = useLoader(THREE.TextureLoader, imgB);
    const texture = useLoader(THREE.TextureLoader, img);

    const mobileScale = [viewport.width / 1.2, viewport.width / 1.8, 1];
    const tabScale = [viewport.width / 2.1, viewport.width / 3.25, 1];

    useFrame(() => {
        frontRef.current.distort = THREE.MathUtils.lerp(frontRef.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
    });

    useFrame(() => {
        backRef.current.distort = THREE.MathUtils.lerp(backRef.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
    });

    return (
        <mesh
            scale={size.width > 768 ? tabScale : mobileScale}
            onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
            position={position}>
            <Plane args={[1, 1, 32, 32]}>
                <MeshDistortMaterial metalness={1.18}
                    map={texture}
                    attach="material" opacity={1} ref={frontRef} speed={2} side={THREE.FrontSide}>
                </MeshDistortMaterial>
            </Plane>
            <Plane args={[1, 1, 32, 32]}>
                <MeshDistortMaterial map={textureB} metalness={1.18}
                    attach="material" opacity={1} ref={backRef} speed={2} side={THREE.BackSide}>
                </MeshDistortMaterial>
            </Plane>
            <Html className="project__text">
                <div className="project__title">
                    <h1 className="project__name">{project.name}</h1>
                    <a href={project.github} target="_blank" className="project__github"></a>
                </div>
                <p className="project__description">{project.description}</p>
                <p className="project__tech">{project.tech}</p>
            </Html>
        </mesh>
    )
};

export default ProjectPlane;