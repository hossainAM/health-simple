import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';

const ReviewItem = ({review}) => {
    const {name, review: reviewText, image} = review;

    return (
        <>
        <section className="text-gray-600 body-font">
            < div className = "container px-5 py-12 mx-auto" >
                <div className="flex flex-wrap">
                    <div className="lg:w-full lg:mb-0 mb-6 p-4 bg-white-100 rounded-lg shadow-md">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 ring-4 ring-red-400 transform hover:scale-105 duration-500" src={image}/>
                            <p className="text-gray-500 font-medium">{reviewText}</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <p className="text-black font-semibold title-font tracking-wider text-md">{name}</p>
                            <p className="text-gray-500">
                            <Rating
                                initialRating={3.5}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{color: 'pink'}} icon={faStar} />}
                                readonly>
                            </Rating>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ReviewItem;