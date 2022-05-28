import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Chart from './Chart';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='text-neutral'>
            <Banner></Banner>
            <Tools></Tools>
            <Chart></Chart>
            <Summary></Summary>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;