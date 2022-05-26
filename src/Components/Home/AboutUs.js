import React from 'react';
import aboutImg from '../../images/aboutImg.jpg';

const AboutUs = () => {
    return (
        <div className='m-4'>
            <h1 className='text-3xl font-bold'>ABOUT US</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8'>
                <div className='flex justify-end item-center'>
                    <img src={aboutImg} alt="" className='rounded-xl'/>
                </div>
                <div className='flex justify-center item-center md:text-left'>
                    <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem earum aliquam modi ea omnis, aut sed exercitationem ex libero aspernatur veniam fugit? Vero dolor libero cupiditate ut consequuntur nostrum aliquid, at facere officiis debitis repudiandae quibusdam deserunt tenetur labore earum!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;