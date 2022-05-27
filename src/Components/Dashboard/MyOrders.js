import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const axios = require('axios').default;


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [id, setId] = useState('');
    const navigate = useNavigate();

    // console.log(email);
    
    // load item 
    const [myOrders, setMyOrders] = useState([]);
    // const loadMyOrders = async()=>{
    //     const url = `http://localhost:5000/my-orders?email=${email}`;
    //     const { data } = await axios.get(url, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     });
    //     setMyOrders(data);
    // }
    // loadMyOrders();
    useEffect(() => {
        const url = `http://localhost:5000/my-orders?email=${email}`;
        fetch(url,{
            method:'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyOrders(data)})
    }, []);

    const handlePaymentBtn= id =>{
        navigate(`/payment/${id}`);
    }

    const handleCancelButton = id => {
        const url = `http://localhost:5000/my-orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingItems = myOrders.filter(order => order._id !== id);
                setMyOrders(remainingItems);
                setId('');
            })
    }
    return (
        <div className="overflow-x-auto">
            <h2 className="font-bold text-3xl mb-4">My Orders</h2>
            <table className="table w-full md:w-[80%] mx-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, index) => <tr
                            key={order._id}
                        >
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.quantity} piece</td>
                            {order.paid?
                            <td><p className='pl-4'>PAID</p></td>
                            :
                            <td><button className="btn btn-primary" onClick={() => handlePaymentBtn(order._id)}>Pay Now</button></td>
                            }
                            {!order.paid?
                            <td><label htmlFor="my-modal-5" className="btn btn-primary" onClick={() => setId(order._id)}>Cancel</label></td>
                            :
                            <td><p className='pl-4'>TrxId: {order.transactionId}</p></td>
                            }
                        </tr>)
                    }

                </tbody>
            </table>

            {/* confirmation modal */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 md:w-[600px] max-w-5xl">
                
                    <h3 className="font-bold text-lg">Cancelling Order</h3>
                    <p className="py-4">Are you sure you want to cancel this order??</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn" onClick={() => handleCancelButton(id)}>YES</label>
                        <label htmlFor="my-modal-5" className="btn">NO</label>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default MyOrders;