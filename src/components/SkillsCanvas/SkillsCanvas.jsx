import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { useSelector } from "react-redux";
import SkillsSphere from "../SkillsSphere/SkillsSphere"
import SkillsIcosahedron from "../SkillsIcosahedron/SkillsIcosahedron";
import SkillsCube from '../SkillsCube/SkillsCube';
import SkillsPlane from '../SkillsPlane/SkillsPlane';
import jsIcon from "../../assets/icons/javascript.png";
import sassIcon from "../../assets/icons/sass.png";
import mysqlIcon from "../../assets/icons/mysql.png";
import reactIcon from "../../assets/icons/react.png";
import pythonIcon from "../../assets/icons/python.png";
import nodeIcon from "../../assets/icons/nodejs.png";
import mongoDBIcon from "../../assets/icons/mongodb.png";
import "./SkillsCanvas.scss";
import Background from "../Background/Background";

function SkillsCanvas() {
    const theme = useSelector((state) => state.theme);

    return (
        <Canvas className="canvas">
            <OrbitControls
                maxDistance={10} minDistance={1.4}
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
            <ambientLight intensity={theme.darkTheme ? 0.15 : 0.6} />
            <directionalLight position={[50, 30, 0]} />
            <Physics>
                <SkillsPlane />
                <SkillsCube scale={0.55} position={[0.7, 2, 1.3]} texture={mongoDBIcon} />
                <SkillsCube scale={0.5} position={[-0.1, 4, 0]} texture={nodeIcon} />
                <SkillsCube scale={0.5} position={[-0.1, 6.5, -1]} texture={pythonIcon} />
                <SkillsCube scale={0.5} position={[-0.3, 3, 1]} texture={jsIcon} />
                <SkillsSphere scale={0.4} position={[-0.3, 7.5, 2.4]} texture={reactIcon} />
                <SkillsSphere scale={0.4} position={[1, 5, 0]} texture={mysqlIcon} />
                <SkillsIcosahedron scale={0.45} position={[-1, 5, -1]} texture={sassIcon} />
            </Physics>
            <Background theme={theme} />
        </Canvas>
    )
}

export default SkillsCanvas;