import React, { useRef } from "react";
import { useLoader, useFrame } from '@react-three/fiber'
import { Html } from "@react-three/drei";
import * as THREE from 'three';
import "./ContactCube.scss";



function ContactCube(props) {
    const ref = useRef();
    const [map, normalMap] = useLoader(THREE.TextureLoader, [props.map, props.normalMap]);

    useFrame((state) => {
        let t = state.clock.getElapsedTime() * (props.speed);
        ref.current.position.set(Math.cos(t), -0.1, -Math.sin(t)).multiplyScalar(props.dist);
        ref.current.rotation.x = -t - Math.PI * 0.5;
        ref.current.rotation.y = -t - Math.PI * 0.5;
        ref.current.rotation.z = Math.PI * 0.5;
    });

    return (
        <mesh ref={ref} scale={0.55} {...props}>
            <boxBufferGeometry />
            <meshStandardMaterial map={map} bumpMap={normalMap} metalness={2} roughness={0.8} position={props.position} />
            <Html>
                <div className="contact__link-wrap">
                    <a href={props.link} target="_blank" className="contact__link"></a>
                </div>
            </Html>
        </mesh >
    )
}

export default ContactCube;