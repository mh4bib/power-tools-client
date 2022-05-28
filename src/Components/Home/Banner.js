import React from 'react';
import './Banner.css';
import logo from '../../images/logo.png';

const Banner = () => {
    return (
        <div className="parallax">
            <img src={logo} alt="" className='w-[200px] md:w-[350px] mx-auto pt-10 md:pt-[80px]'/>
        </div>
    );
};

export default Banner;