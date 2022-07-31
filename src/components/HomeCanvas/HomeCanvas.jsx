import React from "react";
import HomeBox from '../HomeBox/HomeBox';
import { Canvas } from "@react-three/fiber";
import "./HomeCanvas.scss";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import Background from "../Background/Background";

function HomeCanvas() {
    const theme = useSelector((state) => state.darkTheme);

    return (
        <Canvas className="canvas">
            <OrbitControls
                maxDistance={10} minDistance={2}
                autoRotateSpeed={-1.7} autoRotate
                minPolarAngle={0} maxPolarAngle={Math.PI / 3}
            />
            <ambientLight intensity={theme ? 0.15 : 0.5} />
            <directionalLight position={[0, 10, 10]} />
            <spotLight position={[20, 3, 4]} />
            <HomeBox />
            <Background theme={theme} />
        </Canvas>
    )
}

export default HomeCanvas;