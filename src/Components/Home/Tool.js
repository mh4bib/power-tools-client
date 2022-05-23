import React from 'react';

const Tool = ({ tool }) => {
    const { name, picture, desc, minimum, available, price } = tool;
    return (
        <div className='bg-secondary flex flex-col justify-center items-center p-3 rounded-xl shadow-lg'>
            <img src={picture} alt="" className='rounded' />
            <div className='ml-2'>
                <h2><span className='text-4xl font-semibold'>{name}</span> <span className=''> (${price}/ pc)</span></h2>
                <p className='text-left'>{desc.slice(0, 100)}</p>
                <p className='text-left'>Available Quantity: {available} pc</p>
                <p className='text-left'>Minimum order: {minimum} pc</p>
                <button className="btn btn-primary mt-2">purchase</button>
            </div>
        </div>
    );
};

export default Tool;