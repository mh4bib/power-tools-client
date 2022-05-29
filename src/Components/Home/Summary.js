import React from 'react';
import { BeakerIcon, CollectionIcon, GlobeAltIcon, GlobeIcon, UserCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/solid'

const Summary = () => {
    return (
        <div className='mx-3 my-9'>
            <h1 className='text-3xl font-bold mb-6'>OUR BUSINESS SUMMARY</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className='bg-transparent flex flex-col justify-center items-center p-3 rounded-xl'>
                    <UserGroupIcon className="w-[130px] text-primary" />
                    <h2 className='text-6xl font-semibold text-primary'>100+</h2>
                    <p className='text-2xl text-primary'>Brand Customers</p>
                </div>
                <div className='bg-transparent flex flex-col justify-center items-center p-3 rounded-xl'>
                    <GlobeAltIcon className="w-[130px] text-primary" />
                    <h2 className='text-6xl font-semibold text-primary'>90+</h2>
                    <p className='text-2xl text-primary'>Countries Worldwide</p>
                </div>
                <div className='bg-transparent flex flex-col justify-center items-center p-3 rounded-xl'>
                    <CollectionIcon className="w-[130px] text-primary" />
                    <h2 className='text-6xl font-semibold text-primary'>4000+</h2>
                    <p className='text-2xl text-primary'>Exclusive Products</p>
                </div>

            </div>
        </div>
    );
};

export default Summary;