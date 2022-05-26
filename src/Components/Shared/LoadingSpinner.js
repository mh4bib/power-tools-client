import React from 'react';
import loader from '../../images/loader.gif';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* <h1 className='font-bold text-3xl'>Nothing Found</h1> */}
            <img src={loader} alt="" className='w-[60%] md:w-[30%]'/>
        </div>
    );
};

export default LoadingSpinner;