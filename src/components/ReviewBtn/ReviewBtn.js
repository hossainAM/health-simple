import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewBtn = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center'>
            <button onClick={() => navigate('/review')} className='my-24 px-4 py-1 bg-red-200 border border-red-300 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Explore More Reviews</button>
        </div>
    );
};

export default ReviewBtn;