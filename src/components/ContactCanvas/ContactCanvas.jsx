import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import "./ContactCanvas.scss";
import { OrbitControls, ContactShadows, Cloud, Sky, Stars } from "@react-three/drei";
import { useSelector } from "react-redux";
import ContactEarth from "../ContactEarth/ContactEarth";


function ContactCanvas() {
    const theme = useSelector((state) => state.theme);


    return (
        <Canvas className="canvas" >
            <OrbitControls
                maxDistance={10} minDistance={1.4}
                // autoRotateSpeed={-0.6} autoRotate
                minPolarAngle={0} maxPolarAngle={Math.PI / 2.5}
            />
            <ambientLight intensity={theme.darkTheme ? 0.15 : 0.6} />
            <directionalLight position={[12, 15, 3]} />
            {/* <ContactShadows position={[0, -0.8, 0]} frames={1} scale={10} far={3} blur={1} opacity={0.75} /> */}
            {/* <ContactShadows position={[0, -0.8, 0]} frames={1} scale={10} far={3} blur={3} color="black" /> */}
            <ContactEarth />
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

export default ContactCanvas;