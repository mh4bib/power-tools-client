import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    // submitting review button
    const handleSubmit = event => {
        event.preventDefault();
        const name = user.displayName;
        const picture = user.photoURL || 'https://i.ibb.co/YRP6bVD/8b167af653c2399dd93b952a48740620.jpg';
        const ratings = event.target.ratings.value;
        const comment = event.target.review.value;
        // console.log(tool);
        const newReview = {name, picture,  comment, ratings};

        // post to server 
        const url = 'https://power-tools-server-cl9m.onrender.com/reviews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                toast('Thank you for your feedback');
            })
    }

    return (
        <div className='md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4 rounded-xl text-neutral'>
            <div className='card-body'>
                <h3 className="font-bold text-3xl">Add Review</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className="label">
                        <span className="label-text">Giv Rating out of 5</span>
                    </label>
                    <input type="number" name='ratings' className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Write Review</span>
                    </label>
                    <textarea type="text" name='review' placeholder="Write Review Here" className="textarea textarea-bordered h-24 mb-4" />
                    <input type="submit" value="submit" className="btn w-full max-w-xs mx-auto"/>
                </form>
            </div>
        </div>
    );
};

export default AddReview;