import React from 'react';

const Header = () => {
    return (
        <>
        <header>
            <section className="text-gray-600 body-font overflow-hidden my-12 container mx-auto">
                <div className='grid sm:grid-cols-2 gap-16'>
                    <div>
                        <img src={require("../../images/golibanner.webp")} alt="" />
                    </div>
                    <div className='flex flex-col justify-center space-y-8'>
                        <h1 className='text-4xl text-center'>Goli ACV Gummies Review: Boost Your Health and Energy</h1>
                        <p>If you are looking for a way to increase your overall health, Goli Gummies may be the solution. They are tasty, nutritious, and fun to take.</p>
                        <a target="_blank" rel="noreferrer" href="https://majestic-sprite-6cec97.netlify.app/" className='my-24 w-1/3 mx-auto text-center font-semibold  bg-red-200 border border-red-300 rounded-full text-sm hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Live Demo</a>
                    </div>
                </div>
            </section>
        </header>
        </>
    );
};

export default Header;