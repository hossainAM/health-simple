import React from 'react';
import Header from '../Header/Header';
import useReview from '../../Hooks/UseReviews';
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {
    const [reviews, setReviews] = useReview()
    return (
        <>
        <Header></Header>

        <h1 className='text-4xl text-center font-bold text-red-600 mt-24'>What Our Customers Say</h1>

        <div className='container grid grid-cols-3 gap-3 mx-auto'>
        {
            reviews.map(review => <ReviewItem key={review.id} review={review} ></ReviewItem>)
        }
        </div>
        </>
    );
};

export default Home;

