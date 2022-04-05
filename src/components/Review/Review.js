import React from 'react';
import useReviews from '../../Hooks/UseReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-4xl text-center font-bold text-red-600 mt-24'>What Our Customers Say</h1>
            <div className='container grid sm:grid-cols-3 gap-3 mx-auto'>
            {
                reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Review;