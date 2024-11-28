import React from 'react'
import AnimationButton from '../components/AnimationButton';
import Card from '../components/Card';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import Skills from '../components/Skills';

const Landing = () => {
    const frontend = [
        {
            title: "React JS",
            exp: "2",
            desc: [
                {
                    descTitle: "Architecture",
                    descContent: "Leveraging a component-based architecture, templates were created to standardize similar pages, reducing redundant code and increasing reusability. Additionally, tables with built-in features such as sorting, searching, pagination, and filtering were reused across the application. This approach ensures a lightweight software design, significantly enhancing performance and efficiency."
                },
                {
                    descTitle: "Redux & Context",
                    descContent: "To prevent prop drilling in the application, I utilized Redux and the Context API to establish centralized state management, enabling efficient handling of states, variables, and functions."
                },
                {
                    descTitle: "Thirdweb Library",
                    descContent: "Integrated a Dummy Wallet with MetaMask to facilitate seamless development and testing processes."
                },
                {
                    descTitle: "Coinbase Library",
                    descContent: "Connected to Coinbase Wallet for user authentication and blockchain interactions for an Ethereum Staking Application. This leverages Coinbase's infrastructure for secure wallet management."
                },
                {
                    descTitle: "Chart JS Library",
                    descContent: "Utilized Chart.js to present analytics in a visually intuitive and pictorial format."
                },
                

            ]
        },
        {
            title: "Tailwind CSS",
            exp: "2",
            desc: [
                {
                    descTitle: "Experienced Approach",
                    descContent: "Highly Experienced in utilizing Tailwind CSS to efficiently implement custom UI designs, ensuring quick and precise development of user interfaces."
                },
                {
                    descTitle: "Customizing Default Settings",
                    descContent: "Configured custom paths, extended themes with custom animations and colors, and integrated custom or third-party plugins by modifying the tailwind.config.js or tailwind.config.ts files. This customization allowed for greater flexibility and tailored styling options in the project."
                },
                {
                    descTitle: "Animations",
                    descContent: "Providing animations to the website with the help of Tailwind CSS"
                },
                {
                    descTitle: "Flexbox",
                    descContent: "Utilized Flexbox to create flexible, responsive layouts, ensuring efficient alignment and distribution of space within the application, enhancing both its design and functionality."
                },
                {
                    descTitle: "Mobile Responsiveness",
                    descContent: "Developing highly responsive websites optimized for all devices, ensuring seamless user experiences across desktops, tablets, and mobile devices."
                },
            ]
        },
        {
            title: "Bootstrap CSS",
            exp: "2",
            desc: [
                {
                    descTitle: "Pre-constructed UI Components",
                    descContent: "Leveraged pre-built UI components from Bootstrap to accelerate the application development process, significantly reducing the time required to construct the user interface."
                },
            ]
        },
        {
            title: "Javascript",
            exp: "2",
            desc: [
                {
                    descTitle: "Understanding The Basic Concepts",
                    descContent: "Understanding the Variables, Hoisting concept, Scope concept, Data Types, Looping Concepts"
                },
                {
                    descTitle: "DOM Manupulations",
                    descContent: "Dynamically manipulated the website using JavaScript to enhance its functionality and interactivity. This involved modifying content, updating styles, and responding to user interactions, ensuring a seamless and engaging user experience"
                },
                {
                    descTitle: "Building Interactive Websites",
                    descContent: "building interactive basic level websites with animations and quick redirections"
                },
            ]
        },
    ];

    const backend = [
        {
            title: "Node JS & Express JS",
            exp: "2",
            desc: [
                {
                    descTitle: "MVR Architecture",
                    descContent: "Organized the code by separating it into models, controllers, and routes, improving the overall maintainability and scalability of the application. This structure enhances code readability, promotes modularity, and simplifies future updates or debugging."
                },
                {
                    descTitle: "API Development",
                    descContent: "Developed RESTful APIs using Node.js and Express, ensuring efficient handling of HTTP requests and responses. Built scalable and secure APIs for front-end integration, supporting JSON data exchange and authentication protocols like JWT"
                },
                {
                    descTitle: "Database Integration",
                    descContent: "Integrated relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases with Node.js applications, optimizing queries and ensuring data consistency. Utilized ORMs like Sequelize and Mongoose for database management and schema validation"
                },
                {
                    descTitle: "Authentication and Authorization",
                    descContent: "Implemented authentication mechanisms such as JWT (JSON Web Token) and OAuth for secure user login and access control. Developed role-based access control (RBAC) systems to ensure authorized actions on specific resources."
                },

                {
                    descTitle: "Middleware Usage",
                    descContent: "Utilized popular third-party middleware libraries such as cors, helmet, and body-parser for enhanced functionality and security."
                },
            ]
        },
        {
            title: "PHP Laravel",
            exp: "1",
            desc: [
                {
                    descTitle: "MVC Architecture",
                    descContent: "Developed web applications using the Model-View-Controller (MVC) architecture in Laravel, ensuring clear separation of concerns and enhancing maintainability"
                },
                {
                    descTitle: "Routing and URL Handling",
                    descContent: "Defined clean, RESTful routes using Laravel’s routing system to manage application URLs effectively. Utilized route parameters, route groups, and named routes to create organized, reusable, and dynamic URL structures."
                },
                {
                    descTitle: "Authentication and Authorization",
                    descContent: "Implemented secure authentication systems using Laravel’s built-in authentication features such as Laravel Passport and Sanctum for API authentication.Created role-based access control (RBAC) systems to restrict or grant access to certain resources based on user roles and permissions."
                },
                {
                    descTitle: "RESTful API Development",
                    descContent: "Designed and developed RESTful APIs using Laravel, following best practices for HTTP methods, status codes, and data formatting (JSON). Secured APIs using token-based authentication (JWT, Laravel Passport, or Laravel Sanctum)."
                },
            ]
        },
        {
            title: "MongoDB",
            exp: "1",
            desc: [
                {
                    descTitle: "Database Modelling",
                    descContent: "Experienced in creating effective schemas and data models optimized for NoSQL databases."
                },
                {
                    descTitle: "Query Optimization",
                    descContent: "Proficient in writing efficient MongoDB queries and aggregations for faster data retrieval and processing."
                },
                {
                    descTitle: "Integration Expertise",
                    descContent: "Successfully integrated MongoDB with back-end frameworks like Node.js for seamless data handling."
                },
                {
                    descTitle: "Backup and Restore",
                    descContent: "Familiar with database backup, restoration processes, and replication for data redundancy and disaster recovery."
                },
            ]
        },
        {
            title: "MySQL Database",
            exp: "2",
            desc: [
                {
                    descTitle: "Database Design and Management",
                    descContent: "Proficient in designing, implementing, and managing relational databases using MySQL for various applications."
                },
                {
                    descTitle: "SQL Proficiency",
                    descContent: "Skilled in writing complex SQL queries, including joins, subqueries, and stored procedures, for efficient data handling."
                },
                {
                    descTitle: "Data Optimization",
                    descContent: "Experienced in optimizing database performance through indexing, normalization, and query optimization."
                },
                {
                    descTitle: "Backup, Recovery & Migration",
                    descContent: "Implemented robust database backup and recovery strategies to ensure data availability and integrity. Skilled in migrating databases across servers and platforms with minimal downtime."
                },
            ]
        },
        {
            title: "PostgreSQL",
            exp: "0.5",
            desc: [
                {
                    descTitle: "Integrated For Blockchain Interaction",
                    descContent: "Successfully connected and utilized PostgreSQL as the primary database for an Ethereum-based application, ensuring seamless interaction between blockchain and relational data."
                },
            ]
        },
    ];

    const others = [
        {
            title: "Deployments",
            exp: "1",
            desc: [
                {
                    descTitle: "VPS Hosting",
                    descContent: "Successfully deployed a MERN stack application using Hostinger's Virtual Private Hosting. This involved end-to-end server configuration, such as installing and setting up Node.js, integrating GitHub for streamlined CI/CD workflows, and meticulously establishing separate staging and production environments for development and deployment. Their expertise in configuring virtual servers ensures robust and scalable application hosting solutions."
                },
                {
                    descTitle: "Google Cloud Platform (GCP)",
                    descContent: "User contributed to the integration of an Ethereum application on Google Cloud Platform (GCP), effectively managing both external and internal IP configurations. They optimized infrastructure and resources to meet application requirements, utilized React.js for the frontend, Ruby on Rails for the backend, and seamlessly configured a PostgreSQL database within GCP for robust data management"
                },
                {
                    descTitle: "Vercel",
                    descContent: "Utilized Vercel for deploying React.js applications to production, showcasing their ability to efficiently publish unique frontend-based projects with optimized performance and seamless scalability."
                },
                {
                    descTitle: "Render",
                    descContent: "Utilized Render to deploy my NodeJS (ExpressJS) Projects"
                },
            ]
        },
        {
            title: "Worked in Retail Business Softwares",
            exp: "1",
            desc: [
                {
                    descTitle: "About Our Company",
                    descContent: "we are part of the in-house IT team at Pothys Pvt. Ltd., specializing in developing and managing software for various business operations. Their expertise includes systems for sales, purchase management, detailed report analysis, MIS (Management Information Systems), centralized storage solutions, voucher generation, and tools for managing gift voucher cards, loyalty programs, and mobile device purchase orders."
                },
                {
                    descTitle: "Worked in Purchase Based Software",
                    descContent: "Contributed to the development of a screen for generating GRN (Goods Receipt Note) entries and printing GRN receipts. They resolved bugs in report functionalities and designed 11 new user interfaces, incorporating features like bulk offer updates through Excel sheet uploads for streamlined operations"
                },
                {
                    descTitle: "Developed Gift Card Application From The Scratch",
                    descContent: "User created an application to manage customer points redemption and SMS notification handling, enhancing customer engagement and streamlining rewards management."
                },
            ]
        },
        {
            title: "Worked in Customer Relationship Management Softwares",
            exp: "1",
            desc: [
                {
                    descTitle: "Developed CRM Software",
                    descContent: "User developed CRM software combining ReactJS for the frontend and PHP Laravel for the backend. The software features include invoice generation, quotation handling, and bulk email and SMS capabilities for efficient customer communication. Additionally, the user designed an aesthetically appealing UI that garnered significant user appreciation."
                },
            ]
        },
        {
            title: "Langchain JS (AI Based)",
            exp: "0.1",
            desc: [
                {
                    descTitle: "Retrieval-Augmented Generation (RAG)",
                    descContent: "Integrated LangChain.js with Retrieval-Augmented Generation (RAG) to enhance the performance of large language models by combining external data retrieval with text generation.Developed advanced question-answering systems by leveraging RAG for accurate, contextually relevant responses using external knowledge sources."
                },
            ]
        },
    ];
    return (
        <div id='home' className='flex flex-col justify-center items-center md:h-screen md:gap-2 gap-12
         md:px-20 p-6'>
            <div className='flex flex-col justify-center items-center gap-8 md:py-32'>
                <div className='text-white text-center md:py-0 pt-20'>
                    <h1 className='md:text-7xl text-4xl font-bold'>Hi, I'm Mushthaq Ameen.</h1>
                    <p className='text-2xl font-light text-gray-200 py-2'>The Full Stack Developer.</p>
                </div>
                <AnimationButton />
            </div>
            <div className='flex md:flex-row flex-col gap-6 w-full'>
                <Card title="Frontend Skills" description="React JS, Tailwind CSS, Bootstrap, Javascript, CSS, HTML" myContent={<Skills content={frontend} />} />
                <Card title="Backend Skills" description="Node JS(Express JS), PHP Laravel, Core PHP, MongoDB, MySQL, PostgreSQL" myContent={<Skills content={backend} />} />
                <Card title="Other Skills" description="VPS Hosting, GCP Hosting, Vercel, Render, Experience in Retail Based Software, Experience in Building CRM Application, Langchain JS" myContent={<Skills content={others} />} />
            </div>
            <button
                // onClick={handleScroll}
                className=" text-white py-6 my-6 px-4 animate-bounce transition-all duration-300 text-4xl flex flex-col items-center"
            >   <div className='text-sm font-thin'>Scroll Down</div>
                <MdKeyboardDoubleArrowDown />
            </button>
        </div>
    )
}

export default Landing