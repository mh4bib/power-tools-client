import React from 'react';

const Review = ({review}) => {
    const {name, picture, comment} = review;
    return (
        <div className='bg-secondary flex flex-row justify-center items-center p-3 rounded-xl shadow-lg'>
            <img src={picture} alt="" className='w-[70px] rounded-full'/>
            <div className='ml-2'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className=''>{comment.slice(0,100)}</p>
            </div>
        </div>
    );
};

export default Review;