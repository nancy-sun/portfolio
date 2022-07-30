import React, { Suspense } from "react";
import { Cloud, Sky, Stars } from "@react-three/drei";


function Background({ theme }) {

    return (
        <>
            {
                theme.darkTheme ?
                    (<Stars radius={120} depth={90} count={4000} factor={4} saturation={100} speed={0.7} />) :
                    (<Suspense fallback={null}>
                        <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.1} />
                        <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.02} />
                        <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.08} />
                        <Cloud position={[4, 2, 1]} speed={0.2} opacity={0.2} />
                        <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
                    </Suspense>)
            }
        </>
    )
}

export default Background;