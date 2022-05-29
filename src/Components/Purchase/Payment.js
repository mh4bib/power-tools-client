import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import CheckoutForm from './CheckoutForm';
// const axios = require('axios');


const stripePromise = loadStripe('pk_test_51L3Xu3J0jQtteHR58Y1cLZCXMHi2LGuAywKlO7DJP3kTGke5wymI35mlvLLzmX3Z0R8zDx2H4BQvZ7w0xohaNV7P0036m2Oa8x');

const Payment = () => {
    // console.log(total);

    const { _id } = useParams();
    
    // getting order from db 
    const url = `https://enigmatic-plains-10725.herokuapp.com/ordered-tools/${_id}`;
    const { data, isLoading } = useQuery(['orderedTools'], () => fetch(url)
        .then(res => res.json())
        )
        // console.log(data);

    // handle loading 
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='grid grid-cols-1 gap-4 m-4 text-neutral'>
            <div className="card w-[100%] md:w-[40%] bg-base-100 shadow-xl mx-auto p-6">
                    <h1 className="text-2xl font-semibold">Make Payment for {data.name}</h1>
                    <p className='text-[18px]'>Total quantity: {data.quantity} pc</p>
                    <p className='text-[18px]'>Total payable amount: ${data.totalPrice}</p>
            </div>
            <div className="card w-[100%] md:w-[40%] bg-base-100 shadow-xl mx-auto p-6 pt-9">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
            </div>
        </div>
    );
};

export default Payment;