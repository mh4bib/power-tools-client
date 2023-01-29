import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://power-tools-server-cl9m.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mx-3 my-9'>
            <h1 className='text-3xl font-bold mb-6'>HAPPY CLIENTS SAYS</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {
                    reviews.map((review, index) => <Review
                        key={index}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;