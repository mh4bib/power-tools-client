import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='mx-3 my-9'>
            <h1 className='text-3xl font-bold mb-6'>TOOLS</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {
                    tools.map((tool, index) => <Tool
                    key={index}
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;