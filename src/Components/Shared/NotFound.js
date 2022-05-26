import React from 'react';
import notFound from '../../images/404.gif';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* <h1 className='font-bold text-3xl'>Nothing Found</h1> */}
            <img src={notFound} alt="" className='w-[80%] md:w-[30%]'/>
        </div>
    );
};

export default NotFound;