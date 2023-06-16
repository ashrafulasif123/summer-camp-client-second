import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaUsers } from 'react-icons/fa';
import paymentimg from '../assets/images/payment-method.png'
import classimg from '../assets/images/class.png'

const Dashboard = () => {
    const [isInstructor] = useInstructor()

    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Dashboard | Sports Exut</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-success text-base-content">
                <li><NavLink to='/'><FaHome /> Home</NavLink></li>

                    {
                        isInstructor &&
                        <>
                            <li><NavLink to='/dashboard/addclass'>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/myclass'> <img className='h-[15px] w-[15px]' src={classimg} alt="" />  My Class</NavLink></li>

                        </>
                    }

                    {
                        isAdmin &&
                        <>
                            <li><NavLink to='/dashboard/manageclass'><img className='h-[15px] w-[15px]' src={classimg} alt="" /> Manage Class</NavLink></li>
                            <li><NavLink to='/dashboard/manageusers'> <FaUsers /> Manage Users</NavLink></li>
                        </>
                    }
                    {  !isAdmin && !isInstructor &&
                        <>
                            <li><NavLink to='/dashboard/myselectedclass'><img className='h-[15px] w-[15px]' src={classimg} alt="" /> My Selected Class</NavLink></li>
                            <li><NavLink to='/dashboard/myenrolledclass'><img className='h-[15px] w-[15px]' src={classimg} alt="" /> My Enrolled Class</NavLink></li>
                            <li><NavLink to='/dashboard/payment'> <img className='h-[15px] w-[15px]' src={paymentimg} alt="" /> Payment History</NavLink></li>
                        </>
                    }
                    
                </ul>
                

            </div>
        </div>
    );
};

export default Dashboard;