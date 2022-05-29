import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';

const ManageAllOrders = () => {
    const [id, setId] = useState('');
    
    const { data: orders, isLoading, refetch } = useQuery(['orderedTools'], () => fetch('http://localhost:5000/ordered-tools')
        .then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handlePending = (_id) =>{
        // adding role property to server 
        fetch(`http://localhost:5000/ordered-tool/${_id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch();
            })
    }

    const handleDeleteButton = id => {
        const url = `http://localhost:5000/my-orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                refetch();
                setId('');
            })
    }

    return (
        <div className="overflow-x-auto text-neutral">
            <h2 className="font-bold text-3xl mb-4">Manage All Orders</h2>
            <table className="table w-full md:w-[80%] mx-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr
                            key={order._id}
                        >
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            {
                            order.shipped? 
                            <td><p className='pl-4 text-success'>SHIPPED</p></td>
                            :
                            order.paid?
                            <td><p className='pl-4 text-yellow-500'>PENDING</p></td>
                            :
                            <td><p className='pl-4 text-red-600'>UNPAID</p></td>
                            }
                            {!order.paid?
                            <td><label  htmlFor="my-modal-1"  className="btn bg-red-500 border-red-500 text-white" onClick={() => setId(order._id)}>Cancel</label></td>
                            :
                            !order.shipped?
                            <td><button className="btn btn-success text-white" onClick={() => handlePending(order._id)}>Approve</button></td>
                            :
                            ''
                            }
                        </tr>)
                    }

                </tbody>
            </table>

            {/* confirmation modal */}
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 md:w-[600px] max-w-5xl">

                    <h3 className="font-bold text-lg">Removing order</h3>
                    <p className="py-4">Are you sure you want to remove this order??</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-1" className="btn" onClick={() => handleDeleteButton(id)}>YES</label>
                        <label htmlFor="my-modal-1" className="btn">NO</label>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default ManageAllOrders;