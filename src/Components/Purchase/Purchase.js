import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm, useFormState } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
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
    
    // hook form
    const defaultValues = {
        name: user?.displayName,
        email: user?.email
      };

    const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues
    });

    // const { isDirty, isValid } = useFormState();

    //-----------
    const { _id } = useParams();



 
    // console.log(user.email)

    //react hook form
    const onSubmit = data => {
        const email = data.email;
        const phone = data.phone;
        const quantity = data.quantity;
        const address = data.address;
        const totalPrice = price*quantity;
        const newTool = { name, email, phone, quantity, address, totalPrice };
        console.log(newTool);

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
                toast('Your order is placed successfully');
            })
    };
    //----------------


    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const email = data.email;
    //     const phone = event.target.phone.value;
    //     const quantity = event.target.quantity.value;
    //     const address = event.target.address.value;
    //     const totalPrice = price*quantity;
    //     const newTool = { name, email, phone, quantity, address, totalPrice };
    //     // console.log(tool);

    //     const url = 'http://localhost:5000/ordered-tools';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newTool)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);

    //         })
    // }

    return (
        <div className='card md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4'>
            <div className='card-body'>
                <img src={picture} alt="" className='w-[140px] mx-auto' />
                <h3 className="font-bold text-3xl">{name}</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered"
                            {...register("name", {
                            })} defaultValue={defaultValues.name} disabled/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered"
                            {...register("email", {
                            })} defaultValue={defaultValues.email} disabled/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Phone"
                            className="input input-bordered"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone is required'
                                }
                            })} />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'address is required'
                                }
                            })} />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                        </label>
                    </div>
                    
                  
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter quantity"
                            className="input input-bordered"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Please Enter Quantity'
                                },
                                min:{
                                    value: minimum,
                                    message: `minimum order quantity is ${minimum} pc`
                                },
                                max:{
                                    value: available,
                                    message: `we have ${available} pc in stock`
                                }
                            })} />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <input type="submit" disabled={!isDirty || !isValid} value="Place Order" className='btn' />
                </form>


                {/* <form onSubmit={handleSubmit} className='flex flex-col'>
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
                    <input type="submit" value="submit" className="btn mx-auto" disabled={orderQuantity > available || orderQuantity < minimum} />
                </form> */}
            </div>
        </div>
    );
};

export default Purchase;