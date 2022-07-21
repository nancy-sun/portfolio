import React from 'react';
import "./Home.scss";
import BoxCanvas from '../../components/BoxCanvas/BoxCanvas';


function Home() {
    return (
        <main className="home">
            <h1 className="home__title">Hello I'm Nancy Sun</h1>
            <BoxCanvas />
        </main>
    )
}

export default Home