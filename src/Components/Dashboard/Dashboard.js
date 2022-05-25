import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <h2 className='text-[24px] my-4'>My Orders</h2> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/add-review">Add A Review</Link></li>
                    <li><Link to={`/dashboard/my-profile/${user.email}`}>My Profile</Link></li>
                    <li><Link to="/dashboard/manage-all-orders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                    <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;