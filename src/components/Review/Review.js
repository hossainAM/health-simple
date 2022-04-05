import React from 'react';
import useReviews from '../../Hooks/UseReviews';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-red-600 mt-24'>What Our Customers Say</h1>
            <div className='container grid sm:grid-cols-3 gap-3 mx-auto'>
            {
                reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
            }
            </div>
        </div>
    );
};

export default Review;