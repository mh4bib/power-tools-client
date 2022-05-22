import React from 'react';
import { BeakerIcon, GlobeAltIcon, GlobeIcon } from '@heroicons/react/solid'

const Summary = () => {
    return (
        <div className='mx-3 my-9'>
            <h1 className='text-3xl font-bold mb-6'>OUR BUSINESS SUMMARY</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className='bg-transparent flex flex-col justify-center items-center p-3 rounded-xl'>
                    <GlobeAltIcon className="w-[130px] text-blue-500"/>
                    <h2 className='text-6xl font-semibold'>44+</h2>
                    <p className='text-2xl'>No lorem Please !!</p>
                </div>
                <div className='bg-transparent flex flex-col justify-center items-center p-3 rounded-xl'>
                    <GlobeAltIcon className="w-[130px] text-blue-500"/>
                    <h2 className='text-6xl font-semibold'>44+</h2>
                    <p className='text-2xl'>No lorem Please !!</p>
                </div>
                <div className='bg-transparent flex flex-col justify-center items-center p-3 rounded-xl'>
                    <GlobeAltIcon className="w-[130px] text-blue-500"/>
                    <h2 className='text-6xl font-semibold'>44+</h2>
                    <p className='text-2xl'>No lorem Please !!</p>
                </div>
                
            </div>
        </div> 
    );
};

export default Summary;