import React from 'react';
import LeafletMap from '../components/Map';

const ContactUs = () => {
    return (
        <div id='contact' className='relative h-screen overflow-hidden bg-blitter-black'>
            {/* Main content over the Contact Us text */}
            <div className='absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 px-10'>
                <div className='bg-black p-8 bg-gradient-to-tr from-white/10 to-white/20 p-4 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg border border-white/20 w-full h-[400px]'>
                    <h1 className='text-xl md:text-3xl text-white font-bold'>Any Opportunites?</h1>
                    <p className='text-lg text-white font-thin'>Please Do Contact me.</p>
                    <div className='pt-6'>
                        <div className='text-white font-thin'><span className='font-bold pr-6'>Call Me @:</span> +91 8012603733</div>
                        <div className='text-white font-thin'><span className='font-bold pr-6'>Email ID:</span> mushthaq.na@gmail.com</div>
                    </div>
                </div>
                <div className='w-full '>
                    <LeafletMap />
                </div>
            </div>

            {/* Contact Us text that overflows */}
            <div className='absolute w-full bottom-[-7rem] text-[6rem] lg:text-[14rem] font-bold text-center text-black/30 md:block hidden'>
                Contact Us
            </div>
        </div>
    );
};

export default ContactUs;
