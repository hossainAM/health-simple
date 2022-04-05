import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
    return (
        <>
        <Navbar></Navbar>
        <section className="text-gray-600 body-font h-screen">
            <h1 className='text-5xl text-center text-red-500 mt-12'>Frequently Asked Questions</h1>
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-red-100">
                    <div className="py-8 md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is Context API? What are the uses of it?</h2>
                        <p className="leading-relaxed">Context API is an API of React js that makes an way for React to effectively create global variables that can be passed around children. It has a special purpose to solve the problem of state management. React pieces an application into components for maintability purpose. There might be need of same data to be used in different components. Hence React needs to pass data from parent to child component through props. In large application where lot of components are there, there might be difficulties in managing props. Here Context API comes in to solve this issue. A context is created in parent component and wrap it;s child components. Where needed, any child component can use this context to have the same data for use. </p>
                    </div>
                    <div className="py-8 md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is Semantic tag. Give some example.</h2>
                        <p className="leading-relaxed">HTML tags are used to build a markup of content of website. it has nothing to define what type of content it is holding or what are the roles of those content. HTML5 semantic tags comes in here to solve this problem. These tags defines the role of the contents together with formating content. For example- header, footer, nav, article. These tags can specify what type of content they are holding. Thus it helps google search engine or similar site to identify web content and helps in search engine optimization.</p>
                    </div>
                    <div className="py-8 md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Difference between inline, block, inline-block elements</h2>
                        <p className="leading-relaxed">HTML block elements are elements that occupies the full width of a line. hence these elements always create a new line and always stack on top of each other. For example- p, div etc. On the otherhand inline elements occupies width as they required. Hence these can be placed inside block level elements. For example- a, span etc. There are few elements which are called inline-block. They are similar to inline. Only difference is that they can take height, margin and padding. For example- span, a can act as inline-block element as well. </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Blogs;