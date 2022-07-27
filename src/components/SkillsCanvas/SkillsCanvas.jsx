import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Cloud, Sky, Stars } from "@react-three/drei";
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

function SkillsCanvas() {
    const theme = useSelector((state) => state.theme);

    return (
        <Canvas className="canvas">
            <OrbitControls
                maxDistance={10} minDistance={1.4}
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
            <ambientLight intensity={theme.darkTheme ? 0.15 : 0.6} />
            <directionalLight position={[50, 30, 0]} />
            {/* <ContactShadows frames={1} position={[0, 0, 0]} scale={10} opacity={0.4} far={1} blur={2} /> */}
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

            {theme.darkTheme ?
                (<Stars radius={120} depth={90} count={4000} factor={4} saturation={100} speed={0.7} />) :
                (<Suspense fallback={null}>
                    <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, 1]} speed={0.2} opacity={0.1} />
                    <Sky azimuth={0.1} turbidity={15} rayleigh={0.25} inclination={0.6} distance={1000} />
                </Suspense>)
            }
        </Canvas>
    )
}

export default SkillsCanvas;