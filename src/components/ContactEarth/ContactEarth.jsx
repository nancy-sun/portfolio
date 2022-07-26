import React, { useEffect, useRef, useState } from "react";
import { useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, RenderTexture, RoundedBox, Sphere, Lathe, Icosahedron } from "@react-three/drei";
import * as THREE from 'three';
import earthMap from "../../assets/earthMap.jpg";

function ContactEarth() {

    const [map] = useLoader(THREE.TextureLoader, [earthMap])
    // const texture_2 = useLoader(THREE.TextureLoader, two);


    const [hovered, hover] = useState(false)


    return (
        <mesh scale={hovered ? 2.01 : 2} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
            <Sphere position={[0, -1.5, 0]}>
                <meshStandardMaterial map={map}
                // displacementMap={map} 
                />
            </Sphere>
        </mesh>
    )
}

export default ContactEarth;