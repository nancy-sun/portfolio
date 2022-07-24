import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Cloud, Sky, Stars } from "@react-three/drei";
import { useSelector } from "react-redux";
import "./SkillsCanvas.scss";
import SkillsSphere from "../SkillsSphere/SkillsSphere"
import SkillsIcosahedron from "../SkillsIcosahedron/SkillsIcosahedron";
import SkillsCube from '../SkillsCube/SkillsCube';
import jsIcon from "../../assets/icons/javascript.png";
import sassIcon from "../../assets/icons/sass.png";
import mysqlIcon from "../../assets/icons/mysql.png";
import reactIcon from "../../assets/icons/react.png";
import pythonIcon from "../../assets/icons/python.png";
import nodeIcon from "../../assets/icons/nodejs.png";
import mongoDBIcon from "../../assets/icons/mongodb.png";

function SkillsCanvas() {
    const theme = useSelector((state) => state.theme);

    return (
        <Canvas className="canvas">
            <OrbitControls
                maxDistance={10} minDistance={1.4}
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.5}
            />
            <ambientLight intensity={0.6} />
            <directionalLight position={[12, 15, 3]} />

            <SkillsCube scale={0.55} position={[0.7, 0, 1]} texture={mongoDBIcon} />
            <SkillsCube scale={0.5} position={[0, 0, 2]} texture={nodeIcon} />
            <SkillsCube scale={0.5} position={[-0.7, 0, -1]} texture={pythonIcon} />
            <SkillsCube scale={0.5} position={[-0.5, 0, 1]} texture={jsIcon} />
            <SkillsSphere scale={0.4} position={[1, 0, 0]} texture={reactIcon} />
            <SkillsSphere scale={0.4} position={[-1, 0, 0]} texture={mysqlIcon} />
            <SkillsIcosahedron scale={0.45} position={[0, 0, 0]} texture={sassIcon} />
            <ContactShadows frames={1} position={[0, 0, 0]} scale={10} opacity={0.4} far={1} blur={2} />

            {theme.darkTheme ?
                (<Stars radius={120} depth={90} count={4000} factor={4} saturation={100} speed={0.7} />) :
                (<Suspense fallback={null}>
                    <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.2} />
                    <Cloud position={[4, 2, 1]} speed={0.2} opacity={0.3} />
                    <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
                </Suspense>)
            }
        </Canvas>
    )
}

export default SkillsCanvas;