import React, { useContext, useState } from 'react';
import logimg from '../../../assets/images/register.jpg'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const [showPassword, setShowPassword] = useState(true);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You have Successfully Login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true})
            })
            .catch((error) => {
                Swal.fire({
                    position: 'middle',
                    icon: 'error',
                    title: 'Your Email or Password is Wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            });

    };
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const setUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                }
                axios.post('http://localhost:5000/users', setUser)
                    .then(data => {
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'You have Successfully Login',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, {replace: true})
                    })
            })
    }

    const handlePasswordType = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <h2 className='text-center text-3xl font-semibold py-6 bg-slate-300'>Login</h2>
            <Helmet>
                <title>
                    Login | Sports Exut
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <h2>Login</h2>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left ">
                        <img className='w-[600px] h-[600px]' src={logimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'password' : 'text'} {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                                <div className='cursor-pointer mt-2' onClick={handlePasswordType}>
                                    <p>{showPassword ? 'Show Password' : 'Hide Password'}</p>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                {/* <button type='submit' className="btn btn-success">Register</button> */}
                                <input type="submit" className='btn btn-success' value='Login' />
                            </div>
                        </form>
                        <center className='pb-4'><button onClick={handleGoogleLogIn} className='btn btn-primary w-5/6'> <FaGoogle /> Sign In with Google</button></center>
                        <div className='text-center pb-4'>
                            <p>If you are New go to<Link className='btn btn-link p-1' to='/register'>Register Page</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;