import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [fUser] = useAuthState(auth);
    const { email } = useParams();
    // console.log(email);
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://enigmatic-plains-10725.herokuapp.com/users/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user, email]);

    const [education1, setEducation] = useState(user.education1);
    const [location1, setLocation] = useState(user.location1);
    const [phone1, setPhone] = useState(user.phone1);
    const [linkedInUrl1, setLinkedInUrl] = useState(user.linkedInUrl1);
    // console.log(education1)

    const handleSubmit = event => {
        event.preventDefault();
        const updatedUser = {
            education1,
            location1,
            phone1,
            linkedInUrl1
        };

        const url = `https://enigmatic-plains-10725.herokuapp.com/users/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast('Your Profile is Updated');
            })
    }
    return (
        <div className='md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4 rounded-xl text-neutral'>
            <div className='card-body'>
                <h3 className="font-bold text-3xl">{fUser?.displayName}</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' value={user?.email || ''} className="input input-bordered w-full mb-[15px]" readOnly />
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input type="text" name='education' value={education1 || user.education1 || ''} onChange={e => setEducation(e.target.value)} className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">City/District</span>
                    </label>
                    <input type="text" name='location' value={location1 || user.location1 || ''} onChange={e => setLocation(e.target.value)} className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="let" name='phone' value={phone1 || user.phone1 || ''} onChange={e => setPhone(e.target.value)} className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Linked In link</span>
                    </label>
                    <input type="text" name='linkedInUrl' value={linkedInUrl1 || user.linkedInUrl1 || ''} onChange={e => setLinkedInUrl(e.target.value)} className="input input-bordered w-full mb-[15px]" />

                    <input type="submit" value="update" className="btn w-full max-w-xs mx-auto" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;