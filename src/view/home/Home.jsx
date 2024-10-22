import React from 'react'
import Landing from './anchors/Landing';
import ContactUs from './anchors/ContactUs';
import Journey from './anchors/Journey';
import TechStacks from './anchors/TechStacks';
import Skills from './anchors/Skills';
import Project1 from './anchors/Project1';
import Project2 from './anchors/Project2';
import Project3 from './anchors/Project3';
import AllProjects from './anchors/AllProjects';

const Home = () => {
    return (
        <main>
            <Landing />
            <Journey />
            <TechStacks />
            <Skills />
            <Project1 />
            <Project2 />
            <Project3 />
            <AllProjects />
            <ContactUs />

        </main>
    );
}

export default Home