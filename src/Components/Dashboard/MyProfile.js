import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyProfile = () => {
    const { email } = useParams();
    // console.log(email);
    const [user, setUser] = useState({});
    // const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/users/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user]);

    const {education, location, phone, linkedInUrl} = user;

    const [education1, setEducation] = useState(education);
    const [location1, setLocation] = useState(location);
    const [phone1, setPhone] = useState(phone);
    const [linkedInUrl1, setLinkedInUrl] = useState(linkedInUrl);
    // console.log(education1)

    const handleSubmit = event => {
        event.preventDefault();
        const updatedUser = {
            education1,
            location1,
            phone1,
            linkedInUrl1
        };

        const url = `http://localhost:5000/users/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setIsUpdate(true)
            })
    }
    return (
        <div className='card md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4'>
            <div className='card-body'>
                <h3 className="font-bold text-3xl">{user?.name}</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" name='email' value={user?.email} className="input input-bordered w-full mb-[15px]" readOnly />
                    <label class="label">
                        <span class="label-text">Education</span>
                    </label>
                    <input type="text" name='education' value={education1} onChange={e => setEducation(e.target.value)} className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Location</span>
                    </label>
                    <input type="text" name='location' value={location} onChange={e => setLocation(e.target.value)} className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Phone</span>
                    </label>
                    <input type="let" name='phone' value={phone} onChange={e => setPhone(e.target.value)} className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Linked In link</span>
                    </label>
                    <input type="text" name='linkedInUrl' value={linkedInUrl} onChange={e => setLinkedInUrl(e.target.value)} className="input input-bordered w-full mb-[15px]" />

                    <input type="submit" value="update" className="btn w-full max-w-xs mx-auto" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;