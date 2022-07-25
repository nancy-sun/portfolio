import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Cloud, Sky, Stars } from "@react-three/drei";
import { useSelector } from "react-redux";
import "./ProjectsCanvas.scss";
import ProjectPlane from '../ProjectsPlane/ProjectsPlane';


function ProjectsCanvas() {
    const theme = useSelector((state) => state.theme);

    const projects = [
        {
            name: "LiteChat",
            description: "",
            img: "img",
            github: "https://github.com/nancy-sun/litechat",
            position: [0, 0, 0]
        },
        {
            name: "Portfolio",
            description: "",
            img: "",
            github: "https://github.com/nancy-sun/portfolio",
            position: [0, -8, 0]
        },
        {
            name: "Hackathon project",
            description: "",
            img: "",
            github: "https://github.com/nancy-sun/unbounce-project-client",
            position: [0, -16, 0]
        },
        {
            name: "(WIP) Web App",
            description: "",
            img: "",
            github: "",
            position: [0, -23, 0]

        },
        {
            name: "(WIP) react native app",
            description: "",
            img: "",
            github: "",
            position: [0, -31, 0]
        },
    ];

    return (
        <Canvas className="canvas" >
            <ambientLight intensity={theme.darkTheme ? 0.15 : 0.6} />
            <directionalLight position={[50, 30, 0]} />
            <ScrollControls damping={6} pages={5}>
                <Scroll style={{ width: '100%' }}>
                    {projects.map((project, i) => {
                        return (<ProjectPlane key={i} project={project} />)
                    })}
                </Scroll>
            </ScrollControls>
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

export default ProjectsCanvas;