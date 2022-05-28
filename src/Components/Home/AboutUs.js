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
                    <p className='text-[18px]'>Stick with us, and we’ll look at what an About Us page is and why you need one. More importantly, we’ll discuss how to create compelling About Us pages that build trust, increase conversions, and boost retention rates. After that? We’ll dip into 17 examples of unique and exciting About Us pages and delve into what it is about them that makes them worth a special mention.<br />
                    Stick with us, and we’ll look at what an About Us page is and why you need one. More importantly, we’ll discuss how to create compelling About Us pages that build trust, increase conversions, and boost retention rates. After that? We’ll dip into 17 examples of unique and exciting About Us pages and delve into what it is about them that makes them worth a special mention.</p> 
                </div>
            </div>
        </div>
    );
};

export default AboutUs;