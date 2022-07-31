import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import ContactEarth from "../ContactEarth/ContactEarth";
import ContactCube from "../ContactCube/ContactCube";
import linkedinMap from "../../assets/linkedinMap.png";
import githubMap from "../../assets/githubMap.png";
import githubNormalMap from "../../assets/githubNormal.png";
import linkedinNormalMap from "../../assets/linkedinNormal.png";
import Background from "../Background/Background";


function ContactCanvas() {
    const theme = useSelector((state) => state.darkTheme);

    return (
        <Canvas className="canvas" >
            <OrbitControls
                maxDistance={10} minDistance={1.4}
                autoRotateSpeed={0.28} autoRotate
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.9}
                enablePan={false}
            />
            <ambientLight intensity={theme ? 0.01 : 0.2} />
            <pointLight position={[2, 0, 2]} intensity={1.3} />
            <ContactCube map={linkedinMap} normalMap={linkedinNormalMap} dist="2.5" speed="0.1" link="https://www.linkedin.com/in/-nancy-sun/" />
            <ContactCube map={githubMap} normalMap={githubNormalMap} dist="1.5" speed="0.2" link="https://github.com/nancy-sun" />
            <ContactEarth />
            <Background theme={theme} />
        </Canvas>
    )
}

export default ContactCanvas;