import React from 'react'
import Landing from './anchors/Landing';
import ContactUs from './anchors/ContactUs';
import Journey from './anchors/Journey';
import TechStacks from './anchors/TechStacks';
import Skills from './anchors/Skills';
import Project from './anchors/Project';
import AllProjects from './anchors/AllProjects';

import sms1 from "../../assets/projects/cres1.png"
import sms2 from "../../assets/projects/cres2.png"
import sms3 from "../../assets/projects/cres3.png"
import sms4 from "../../assets/projects/cres4.png"
import sms5 from "../../assets/projects/cres5.png"
import sms6 from "../../assets/projects/cres6.png"

import gld1 from "../../assets/projects/gld1.png"
import gld2 from "../../assets/projects/gld2.png"
import gld3 from "../../assets/projects/gld3.png"
import gld4 from "../../assets/projects/gld4.png"
import gld5 from "../../assets/projects/gld5.png"
import gld6 from "../../assets/projects/gld6.png"

import cms1 from "../../assets/projects/cms1.png"
import cms2 from "../../assets/projects/cms2.png"
import cms3 from "../../assets/projects/cms3.png"
import cms4 from "../../assets/projects/cms4.png"
import cms5 from "../../assets/projects/cms5.png"
import cms6 from "../../assets/projects/cms6.png"
const Home = () => {
    return (
        <main>
            <Landing />
            <Journey />
            <TechStacks />
            <Project projectTitle="School Management System" projectTag="Project 01" Image1={sms4} Image2={sms5} Image3={sms1} Image4={sms3} bgColor="bg-black/90" stickyH="top-[40px] md:top-[80px]">

                <div className='font-thin'>Developed a Landing website and an application for managing both students and teachers. The application is user-group based, where each user is assigned specific permissions according to their designated user group.</div><br />

                <div className='font-bold hidden md:block'>Technical View</div>
                <div className='font-thin hidden md:block'>The frontend is built using React JS, featuring a unique architecture. It communicates with the backend through API requests made with Axios. The backend, developed with Node JS (Express JS), retrieves data from a MySQL database and provides it as a response to the API calls from the frontend.</div><br />

                <div className='font-thin hidden md:block'>Authentication is managed using JWT tokens to ensure enhanced security, while authorization is handled through user groups and permissions, ensuring appropriate access control.</div><br />

                <div className='font-thin'><span className='font-bold'>Tech Stacks Used</span> - React JS (Context API), Node JS (Express JS), Tailwind CSS, MongoDB</div>
            </Project>
            <Project projectTitle="Ethereum Staking Application" projectTag="Project 02" Image1={gld1} Image2={gld2} Image3={gld4} Image4={gld5} bgColor="bg-gray-900" stickyH="top-[100px] md:top-[160px]">
                <div className='font-thin'>Developed an application for investing in a Halal Ethereum platform. Users can log in to their respective wallets and manage their transactions. They can deposit or withdraw Ethereum, specifically catering to individuals involved in Halal transactions.</div><br />

                <div className='font-bold hidden md:block'>Technical View </div>
                <div className='font-thin hidden md:block'>Used the MetaMask extension in the browser to manage a dummy wallet locally.
                    The payment gateway for Ethereum transactions is implemented with real-time status updates, including loading, pending, and completion states.</div>

                <div className='font-thin hidden md:block'>Authentication is seamlessly managed using the Thirdweb library to log into their wallets.</div><br />

                <div className='font-thin hidden md:block'>Chart.js provides analytical insights by visually displaying transaction data in a chart format.</div><br />

                <div className='font-thin'><span className='font-bold'>Tech Stacks Used</span> - React JS (Redux), Ruby (Rails), Tailwind CSS, PostgreSQL.</div>

            </Project>
            <Project projectTitle="Secured Authentication System" projectTag="Project 03" Image1={cms1} Image2={cms3} Image3={cms6} Image4={cms5} bgColor="bg-gray-800" stickyH="top-[160px] md:top-[240px]">
                <div className='font-thin'>Developed an application using the Sanctum library in PHP Laravel, featuring a highly secure login system designed to effectively mitigate phishing attempts and prevent SQL injection attacks.</div><br/>

                <div className='font-bold hidden md:block'>Technical View</div>
                <div className='font-thin hidden md:block'>The application employs a unique architecture in React to enhance code quality while minimising code redundancy.</div><br/>
                <div className='font-thin hidden md:block'>On the backend, it integrates the Sanctum library within the API routing system, ensuring that no HTTP methods can be executed without proper authentication.</div><br/>

                <div className='font-thin'><span className='font-bold'>Tech Stacks Used</span> - React JS (Context API), PHP Laravel, Tailwind CSS, MySQL.</div>

            </Project>
            <AllProjects />
            {/* <Skills /> */}
            <ContactUs />
        </main>
    );
}

export default Home