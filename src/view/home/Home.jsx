import React from 'react'
import Landing from './anchors/Landing';
import ContactUs from './anchors/ContactUs';
import Journey from './anchors/Journey';
import TechStacks from './anchors/TechStacks';
import Skills from './anchors/Skills';

const Home = () => {
    return (
        <main>
            <Landing />
            <Journey />
            <TechStacks />
            <Skills />
            <ContactUs />
        </main>
    );
}

export default Home