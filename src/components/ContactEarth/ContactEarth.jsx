import React, { useState } from "react";
import { useLoader } from "@react-three/fiber"
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import earthMap from "../../assets/earthMap.jpeg";
import earthNormal from "../../assets/earthNormal.jpeg";
import earthSpec from "../../assets/earthSpec.jpeg";

function ContactEarth() {
    const [map, normalMap, specMap] = useLoader(THREE.TextureLoader, [earthMap, earthNormal, earthSpec]);
    const [hovered, hover] = useState(false);

    return (
        <mesh scale={hovered ? 0.81 : 0.8} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
            <Sphere position={[0, -0.5, 0]}>
                <meshPhongMaterial specularMap={specMap} />
                <meshStandardMaterial map={map} bumpMap={normalMap} metalness={0.2} roughness={0.8} />
            </Sphere>
        </mesh>
    );
};

export default ContactEarth;