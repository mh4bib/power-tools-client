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

    const makeAdminBtn = () =>{
        refetch();
    }
    return (
        <div>
            <h1 className="font-bold text-3xl">make admin</h1>
            <table class="table w-full">
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
                            <td><button class="btn btn-primary" onClick={makeAdminBtn}>Make Admin</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;