import React, { useContext } from 'react';
import registerimg from '../../../../assets/images/register.jpg';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const confirm = data.confirm
        if(password !== confirm){
            return Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Password Not Matched',
                showConfirmButton: false,
                timer: 1500
              })
        }
        createUser(email, password)
        .then( () =>{
            updateUserProfile(data.name, data.photo)
            .then( () =>{
                const setUser = {
                    name: data.name,
                    email: data.email,
                    image: data.photo
                }
                axios.post('http://localhost:5000/users' , setUser)
                .then(data =>{
                    // console.log(data)
                    reset()
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'You have Successfully registered',
                        showConfirmButton: false,
                        timer: 1500
                      })
                })
                
            })
         })
        .catch(error =>{
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'email-already-in-use',
                showConfirmButton: false,
                timer: 1500
              })
        })
       
    };
    return (
        <>
        <Helmet>
                <title>
                    Register | Sports Exut
                </title>
            </Helmet>
        <h2 className='text-center text-3xl font-semibold py-6 bg-slate-300'>Ragistration</h2>
         <div className="hero min-h-screen bg-base-200">
         
           <div className="hero-content flex-col lg:flex-row">
           
               <div className="text-center lg:text-left ">
                   <img className='w-[600px] h-[600px]' src={registerimg} alt="" />
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Name</span>
                           </label>
                           <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                           {errors.name && <p className='text-red-600'>Name Must be Required</p>}
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Email</span>
                           </label>
                           <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                           {errors.email && <p className='text-red-600'>Email Must be Required</p>}
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Password</span>
                           </label>
                           <input type="password" {...register("password", {
                               required: true,
                               minLength: 6,
                               pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                           })} placeholder="Password" className="input input-bordered" />
                           {errors.password &&
                               <>
                                   <li className='text-red-400'>Password Must be 6 or more digit</li>
                                   <li className='text-red-400'>Please provide a Capital letter</li>
                                   <li className='text-red-400'>Please provide a special Character</li>
                               </>
                           }
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Confirm Password</span>
                           </label>
                           <input type="password" {...register("confirm", { required: true })} placeholder="Confirm Password" className="input input-bordered" />
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Photo URL</span>
                           </label>
                           <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                           {errors.photo && <p className='text-red-600'>Photo Must be Required</p>}
                       </div>
                       <div className="form-control mt-6">
                           {/* <button type='submit' className="btn btn-success">Register</button> */}
                           <input type="submit" className='btn btn-success' value='Register' />
                       </div>
                   </form>
                   <div className='text-center pb-4'>
                       <p>If you are already Registered go to<Link className='btn btn-link p-1' to='/login'>Login</Link></p>
                   </div>
               </div>
           </div>
       </div>
        </>
       
    );
};

export default Register;