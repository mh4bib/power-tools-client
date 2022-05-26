import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const data = [
        {
            subject: "Asia",
            A: 120,
            B: 110,
            fullMark: 150
        },
        {
            subject: "Europe",
            A: 98,
            B: 130,
            fullMark: 150
        },
        {
            subject: "South America",
            A: 86,
            B: 130,
            fullMark: 150
        },
        {
            subject: "North America",
            A: 99,
            B: 100,
            fullMark: 150
        },
        {
            subject: "Africa",
            A: 85,
            B: 90,
            fullMark: 150
        },
        {
            subject: "Australia",
            A: 65,
            B: 85,
            fullMark: 150
        }
    ];
    return (
        <div className='hidden md:grid grid-cols-2 gap-8 outline-dashed outline-3 outline-offset-2 outline-pink-500 rounded-xl m-16'>
            <div className='flex flex-col justify-center items-end'>
                <h1 className='text-3xl font-bold'>OUR MARKET SHARE AROUND THE GLOBE</h1>
                <p className='text-[20px]'>Here is a simple graph which shows the global domination of our product</p>
            </div>
            <div><RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart></div>
        </div>
    );
};

export default Chart;