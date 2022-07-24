import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, RenderTexture, RoundedBox, Sphere, Lathe, Icosahedron } from "@react-three/drei";
import * as THREE from 'three';
// import one from "../../assets/textures/one.jpg"
// import two from "../../assets/textures/two.jpg"
// import three from "../../assets/textures/three.jpg"
import BoxPlane from "../BoxPlane/BoxPlane";

function Box() {

    // const texture_1 = useLoader(THREE.TextureLoader, one)
    // const texture_2 = useLoader(THREE.TextureLoader, two);
    // const texture_3 = useLoader(THREE.TextureLoader, three);



    // const textRef = useRef();
    // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

    const [hovered, hover] = useState(false)


    return (
        <mesh
            rotation-y={4}
            scale={hovered ? 2.02 : 2} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
            <RoundedBox>
                <meshStandardMaterial>
                    <RenderTexture attach="map" anisotropy={16} side={THREE.DoubleSide}>
                        <PerspectiveCamera makeDefault manual position={[0, 0, 2]} />
                        <color attach="background" args={["#a2d2ff"]} />
                        <Text fontSize={0.4} color="#555"></Text>
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