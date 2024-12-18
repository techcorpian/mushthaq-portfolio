import React from 'react'
import AutoScrollSlider from '../components/AutoScrollSlider'
import ReactIcon from '../../../assets/react-logo.webp'
import NodeIcon from '../../../assets/nodejs.png'
import ExpressIcon from '../../../assets/ExpressJS.png'
import MongoDB from '../../../assets/MongoDB.png'
import PhpIcon from '../../../assets/php.svg'
import Laravel from '../../../assets/laravel.png'

const TechStacks = () => {
    const imageArray = [
        ReactIcon,
        NodeIcon,
        ExpressIcon,
        MongoDB,
        PhpIcon,
        Laravel,
    ];
    return (

        <div id='stack' className='relative py-20 mt-28'>
            <div className='absolute top-0 left-0 right-0 text-center md:text-9xl text-6xl z-0 text-white font-bold'>Tech Stacks</div>
            <div className='inset-0 flex justify-center items-center mt-9 z-10'>
                <AutoScrollSlider images={imageArray} />
            </div>
        </div>

    )
}

export default TechStacks