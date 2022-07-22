import React from 'react';
import HomeCanvas from '../../components/HomeCanvas/HomeCanvas';
import "./Home.scss";

function Home() {
    return (
        <main className="home">
            <h1 className="home__title">Hello I'm Nancy Sun</h1>
            <HomeCanvas />
        </main>
    )
}

export default Home