import React from 'react';
import notFound from '../../images/404.gif';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={notFound} alt="" className='w-[80%] md:w-[30%]'/>
        </div>
    );
};

export default NotFound;