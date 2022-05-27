import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [id, setId] = useState('');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/ordered-tools`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setOrders(data)})
    }, []);
    return (
        <div className="overflow-x-auto">
            <h2 className="font-bold text-3xl mb-4">Manage All Orders</h2>
            <table className="table w-full md:w-[80%] mx-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr
                            key={order._id}
                        >
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td><button className="btn btn-primary">Pending</button></td>
                            <td><label /* htmlFor="my-modal-1" */ className="btn btn-primary" onClick={() => setId(order._id)}>Cancel</label></td>
                        </tr>)
                    }

                </tbody>
            </table>

            {/* confirmation modal */}
            {/* <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 md:w-[600px] max-w-5xl">

                    <h3 className="font-bold text-lg">Removing order</h3>
                    <p className="py-4">Are you sure you want to remove this order??</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-1" className="btn" onClick={() => handleDeleteButton(id)}>YES</label>
                        <label htmlFor="my-modal-1" className="btn">NO</label>
                    </div>
                </div>
            </div> */}


        </div >
    );
};

export default ManageAllOrders;