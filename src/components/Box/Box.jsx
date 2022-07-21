import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, meshPhongMaterial, GradientTexture } from "@react-three/drei";



function Box() {
    return (
        <mesh>
            <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
                <meshPhongMaterial color="#a2d2ff" />
            </RoundedBox>
        </mesh>
    )
}

export default Box;