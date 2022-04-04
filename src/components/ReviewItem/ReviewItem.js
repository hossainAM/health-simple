import React from 'react';

const ReviewItem = ({review}) => {
    const {name, review: reviewText, image, rating} = review;

    // console.log(review)
    return (
        <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-full lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image}/>
                        <p className="leading-relaxed">{reviewText}</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <p className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</p>
                        <p className="text-gray-500">Rating: {rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ReviewItem;