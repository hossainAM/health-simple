import React from 'react';

const Header = () => {
    return (
        <>
        <header>
            <section className="text-gray-600 body-font overflow-hidden my-12 container mx-auto">
                <div className='grid grid-cols-2 gap-16'>
                    <div>
                        <img src={require("../../images/golibanner.webp")} alt="" />
                    </div>
                    <div className='flex flex-col justify-center space-y-8'>
                        <h1 className='text-4xl'>Goli ACV Gummies Review: Boost Your Health and Energy</h1>
                        <p>If you are looking for a way to increase your overall health, Goli Gummies may be the solution. They are tasty, nutritious, and fun to take.</p>
                        <button>Live Demo</button>
                    </div>
                </div>
            </section>
        </header>
        </>
    );
};

export default Header;