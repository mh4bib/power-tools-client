import React, { useEffect, useState } from 'react';

const ManageTools = () => {
    const [id, setId] = useState('');
    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/tools`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTools(data)})
    }, []);

    const handleDeleteButton = id => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingItems = tools.filter(tool => tool._id !== id);
                setTools(remainingItems);
                setId('');
            })
    }

    return (
        <div className="overflow-x-auto">
            <h2 className="font-bold text-3xl mb-4">Manage Tools</h2>
            <table className="table w-full md:w-[60%] mx-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map((tool, index) => <tr
                            key={tool._id}
                        >
                            <th>{index + 1}</th>
                            <td>{tool.name}</td>
                            <td><label htmlFor="my-modal-1" className="btn btn-primary" onClick={() => setId(tool._id)}>Cancel</label></td>
                        </tr>)
                    }

                </tbody>
            </table>

            {/* confirmation modal */}
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 md:w-[600px] max-w-5xl">

                    <h3 className="font-bold text-lg">Removing Tool</h3>
                    <p className="py-4">Are you sure you want to remove this tool??</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-1" className="btn" onClick={() => handleDeleteButton(id)}>YES</label>
                        <label htmlFor="my-modal-1" className="btn">NO</label>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default ManageTools;