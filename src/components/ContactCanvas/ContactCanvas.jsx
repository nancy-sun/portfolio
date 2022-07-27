import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import "./ContactCanvas.scss";
import { OrbitControls, Cloud, Sky, Stars } from "@react-three/drei";
import { useSelector } from "react-redux";
import ContactEarth from "../ContactEarth/ContactEarth";
import ContactCube from "../ContactCube/ContactCube";
import linkedinMap from "../../assets/linkedinMap.png";
import githubMap from "../../assets/githubMap.png";
import githubNormalMap from "../../assets/githubNormal.png";
import linkedinNormalMap from "../../assets/linkedinNormal.png";


function ContactCanvas() {
    const theme = useSelector((state) => state.theme);

    return (
        <Canvas className="canvas" >
            <OrbitControls
                maxDistance={10} minDistance={1.4}
                autoRotateSpeed={0.28} autoRotate
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.5}
            />
            <ambientLight intensity={theme.darkTheme ? 0.01 : 0.15} />
            <pointLight position={[2, 0, 2]} intensity={1.3} />
            <ContactCube map={linkedinMap} normalMap={linkedinNormalMap} dist="2.5" speed="0.1" link="https://www.linkedin.com/in/-nancy-sun/" />
            <ContactCube map={githubMap} normalMap={githubNormalMap} dist="1.5" speed="0.2" link="https://github.com/nancy-sun/portfolio" />
            <ContactEarth />
            {theme.darkTheme ?
                (<Stars radius={120} depth={90} count={4000} factor={4} saturation={100} speed={0.7} />) :
                (<Suspense fallback={null}>
                    <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.1} />
                    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.02} />
                    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.08} />
                    <Cloud position={[4, 2, 1]} speed={0.2} opacity={0.2} />
                    <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
                </Suspense>)
            }
        </Canvas>
    )
}

export default ContactCanvas;