import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewBtn = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center'>
            <button onClick={() => navigate('/review')} className='my-24 bg-red-500 text-white p-2'>Explore More Reviews</button>
        </div>
    );
};

export default ReviewBtn;