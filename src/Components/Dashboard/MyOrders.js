import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [myOrders, setMyOrders] = useState([]);
    const [id, setId] = useState('');
    console.log(id);

    // load item 
    useEffect(() => {
        const url = `http://localhost:5000/my-orders?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);

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
        <div class="overflow-x-auto">
            <table class="table w-full">
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
                            key={index}
                        >
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.quantity} piece</td>
                            <td><button class="btn btn-primary">Pay Now</button></td>
                            <td><label for="my-modal-5" class="btn btn-primary" onClick={() => setId(order._id)}>Cancel</label></td>
                        </tr>)
                    }

                </tbody>
            </table>

            {/* confirmation modal */}
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 md:w-[600px] max-w-5xl">
                
                    <h3 class="font-bold text-lg">Cancelling Order</h3>
                    <p class="py-4">Are you sure you want to cancel this order??</p>
                    <div class="modal-action">
                        <label for="my-modal-5" class="btn" onClick={() => handleCancelButton(id)}>YES</label>
                        <label for="my-modal-5" class="btn">NO</label>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default MyOrders;