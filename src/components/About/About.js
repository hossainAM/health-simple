import React from 'react';

const About = () => {
    return (
        <div className='h-screen grid sm:grid-cols-2 bg-gray-400 items-center'>
            <img className='w-2/3 rounded -mb-60 ml-72' src={require("../../images/Goli-Gummies.webp")} alt="" />
            <div className='space-y-4 -mt-60'>
                <h1 className='text-3xl font-semibold text-black'>ABOUT US</h1>
                <p className='text-6xl font-semibold text-black'><span>We are a brand</span></p>
                <p className='text-6xl font-semibold text-black'><span>focused on making</span></p>
                <p className='text-6xl font-semibold text-red-500'><span>health simple</span></p>
                <p className='text-6xl font-semibold text-black'><span>and delicious</span></p>
            </div>
        </div>
    );
};

export default About;