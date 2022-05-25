import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MakeAdmin = () => {
    const { data, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/users')
        .then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const makeAdminBtn = (email) => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    console.log('You have no right to modify users')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    refetch();
                    console.log('making admin successful')
                }
            })
    }
    return (
        <div>
            <h1 className="font-bold text-3xl my-4">make admin</h1>
            <table class="table w-full md:w-[50%] mx-auto">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => <tr
                            key={index}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td><button class="btn btn-primary" onClick={() => makeAdminBtn(user.email)}>Make Admin</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;