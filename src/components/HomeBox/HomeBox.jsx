import React, { useState } from "react";
import { RenderTexture, RoundedBox } from "@react-three/drei";
import * as THREE from 'three';
import BoxPlane from "../BoxPlane/BoxPlane";

function Box() {

    const [hovered, hover] = useState(false)

    return (
        <mesh
            rotation-y={4}
            scale={hovered ? 2.02 : 2} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
            <RoundedBox>
                <meshStandardMaterial metalness={2}>
                    <RenderTexture attach="map" anisotropy={16} side={THREE.DoubleSide}>
                        <color attach="background" args={["pink"]} />
                    </RenderTexture>
                </meshStandardMaterial>
                <BoxPlane position={[0.501, 0, 0]} page={"skills"} rotateY={true} />
                <BoxPlane position={[0, 0, 0.501]} page={"contact"} />
                <BoxPlane position={[0, 0, -0.501]} page={"projects"} />
                <BoxPlane position={[-0.501, 0, 0]} page={"~"} rotateY={true} />
                <BoxPlane position={[0, 0.501, 0]} page={"about"} rotateX={true} />
            </RoundedBox>
        </mesh>
    )
}

export default Box;