import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { _id } = useParams();

    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tools/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, []);

    const { name, picture, desc, minimum, available, price } = tool;

    const [user, loading, error] = useAuthState(auth);

    const [orderQuantity, setOrderQuantity] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const totalPrice = price*quantity;
        const newTool = { name, email, phone, quantity, address, totalPrice };
        // console.log(tool);

        const url = 'http://localhost:5000/ordered-tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                
            })
    }

    return (
        <div className='card md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4'>
            <div className='card-body'>
                <img src={picture} alt="" className='w-[140px] mx-auto' />
                <h3 className="font-bold text-3xl">{name}</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Product Quantity</span>
                    </label>
                    <input onChange={e => setOrderQuantity(e.target.value)} type="number" name='quantity' placeholder="Enter Quantity" className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Your Address</span>
                    </label>
                    <input type="text" name='address' placeholder="Enter Your Address" className="input input-bordered w-full mb-[15px]" />
                    <input type="submit" value="submit" className="btn w-full max-w-xs mx-auto" disabled={orderQuantity > available || orderQuantity < minimum} />
                </form>
            </div>
        </div>
    );
};

export default Purchase;