import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useInstructor from '../../../hooks/useInstructor';
import useAdmin from '../../../hooks/useAdmin';




const NavMenu = () => {
    const navigate = useNavigate()
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()
    const { user, logOut, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='text-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You have Successfully Logout',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/login')
            })
    }
    const navitem = <>
        <li><Link className='text-lg' to='/'>Home</Link></li>
        <li><Link className='text-lg' to='/instructors'>Instructors</Link></li>
        <li><Link className='text-lg' to='/classes'>Classes</Link></li>
        {isInstructor &&
            <li><Link className='text-lg' to='/dashboard/myclass'>Dashboard</Link></li>
        }
        {isAdmin &&
            <li><Link className='text-lg' to='/dashboard/manageusers'>Dashboard</Link></li>
        }
        {!isAdmin && !isInstructor &&
            <li><Link className='text-lg' to='/dashboard/myselectedclass'>Dashboard</Link></li>
        }

        <li><Link className='text-lg' to='/register'>Register </Link></li>
        {
            user
                ? <li><a onClick={handleLogOut} className='text-yellow-800 font-extrabold text-lg'>LogOut</a></li>
                : <li><Link to='/login' className='text-green-950 font-extrabold text-lg'>Login </Link></li>
        }

    </>
    return (
        <div className="navbar bg-success text-white font-semibold">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Sports Exut</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitem}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <img title={user.displayName} className='header-img rounded-circle me-3 w-[55px] h-[55px] rounded-full' src={user.photoURL} alt="" />}
            </div>
        </div>
    );
};

export default NavMenu;