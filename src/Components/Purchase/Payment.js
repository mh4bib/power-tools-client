import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// const axios = require('axios');


const stripePromise = loadStripe('pk_test_51L3Xu3J0jQtteHR58Y1cLZCXMHi2LGuAywKlO7DJP3kTGke5wymI35mlvLLzmX3Z0R8zDx2H4BQvZ7w0xohaNV7P0036m2Oa8x');

const Payment = ({ total }) => {
    // console.log(total);

    // const { _id } = useParams();

    // const [orderedTool, setOrderedTool] = useState({});
    // const loadOrders = async() =>{
    //     const url = `http://localhost:5000/ordered-tools/${_id}`
    //     const { data } = await axios.get(url,)
    //     setOrderedTool(data)
    // }
    // loadOrders();
    // const {totalPrice} = orderedTool;
    // // useEffect(() => {
    // //     const url = `http://localhost:5000/ordered-tools/${_id}`
    // //     fetch(url)
    // //         .then(res => res.json())
    // //         .then(data => {
    // //             setOrderedTool(data)
    // //         })
    // //     }, []);
    //     console.log(orderedTool.totalPrice);
        // const {totalPrice} = orderedTool;

    return (
        <div className='my-4'>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h1 class="card-title">Make Payment</h1>
                    <p>please pay ${total}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm total={total} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;