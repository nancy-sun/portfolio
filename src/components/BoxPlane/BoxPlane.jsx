import React, { useState } from "react";
import { Text, PerspectiveCamera, RenderTexture, Plane } from "@react-three/drei";
import * as THREE from 'three';
import { toPage } from "../../utils/utils";

function BoxPlane({ position, page, rotateY, rotateX }) {

    const [hovered, hover] = useState(false)

    return (
        <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
            rotation-y={rotateY ? Math.PI / 2 : ((page === "projects" || page === "about") ? -Math.PI : 0)}
            rotation-x={rotateX ? Math.PI / 2 : 0}
            onClick={(e) => {
                toPage(e, page);
            }} position={position}>
            <Plane args={[0.8, 0.8]}>
                <meshStandardMaterial metalness={2} attach="material" color="pink" side={THREE.DoubleSide}>
                    <RenderTexture attach="map" anisotropy={16}>
                        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                        <color attach="background" args={[]} />
                        <ambientLight intensity={0.5} />
                        <Text fontSize={1} color={hovered ? "#909add" : "#555"} letterSpacing={0.17}>
                            {page}
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </Plane>
        </mesh>
    )
}

export default BoxPlane;