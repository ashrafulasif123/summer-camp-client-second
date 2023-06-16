import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosProtected from '../../../hooks/useAxiosProtected';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';



const AddaClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const classname = data.classname;
        const instructor = data.instructorname;
        const email = data.email
        const seats = parseInt(data.seats)
        const price = parseFloat(data.price)
        const status = data.status
        const image = data.image
        const enrolledstudent = 0

        const summarClass = {
            classname, instructor, email, seats, price, status, image, enrolledstudent
        }
        axiosProtect.post('/users/instructor/addclass', summarClass)
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'You have Successfully Add Class',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })

    };
    return (
        <>
            <h2 className='text-center text-3xl font-semibold py-6 bg-slate-300 w-full'>Add a Class</h2>
            <Helmet>
                <title>
                    Add a Class | Sports Exut
                </title>
            </Helmet>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Class name</span>
                                    </label>
                                    <input type="text" {...register("classname", { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.classname && <p className='text-red-600'>Class Name Must be Required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Instructor name</span>
                                    </label>
                                    <input type="text" value={user?.displayName} readOnly {...register("instructorname", { required: true })} placeholder="Email" className="input input-bordered" />
                                    {/* {errors.instructorname && <p className='text-red-600'>Instructor name Must be Required</p>} */}
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" value={user?.email} readOnly {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                    {/* {errors.email && <p className='text-red-600'>Email Must be Required</p>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available seats</span>
                                    </label>
                                    <input type="number" {...register("seats", { required: true })} placeholder="Seats" className="input input-bordered" />
                                    {errors.seats && <p className='text-red-600'>Seats Must be Required</p>}
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
                                    {errors.price && <p className='text-red-600'>Price Must be Required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <input type="text" readOnly {...register("status", { required: true })} value='pending' className="input input-bordered" />
                                    {/* {errors.photo && <p className='text-red-600'>Photo Must be Required</p>} */}
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.image && <p className='text-red-600'>Photo Must be Required</p>}
                            </div>
                            <div className="form-control my-6">
                                {/* <button type='submit' className="btn btn-success">Register</button> */}
                                <input type="submit" className='btn btn-success' value='Add Class' />
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </>

    );
};

export default AddaClass;