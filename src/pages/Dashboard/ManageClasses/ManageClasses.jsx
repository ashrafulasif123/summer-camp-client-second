import React, { useState } from 'react';
import useAllClass from '../../../hooks/useAllClass';
import useAxiosProtected from '../../../hooks/useAxiosProtected';
// import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ManageClasses = () => {
    const { adminclass, refetch } = useAllClass()
    const [axiosProtect] = useAxiosProtected()
    // console.log(adminclass)
    const handleApproved = _id => {

        axiosProtect.patch(`/users/admin/${_id}`)
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'This Class is Approved',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
    }
    const handleDenied = _id => {
        axiosProtect.patch(`/users/administrator/${_id}`)
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'This Class is Denied',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
    }
    
    return (
        <>
            <Helmet>
                <title>
                    Manage Classes | Sports Exut
                </title>
            </Helmet>
            <h2 className='font-extrabold text-success text-3xl text-center p-4'>Manage Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='border border-success text- font-extrabold text-center'>Serial</th>
                            <th className='border border-success text- font-extrabold text-center'>Picture</th>
                            <th className='border border-success text- font-extrabold text-center'>Class <br /> name</th>
                            <th className='border border-success text- font-extrabold text-center'>Instructor <br /> name</th>
                            <th className='border border-success text- font-extrabold text-center'>Instructor <br /> email</th>
                            <th className='border border-success text- font-extrabold text-center'>Available <br /> seats</th>
                            <th className='border border-success text- font-extrabold text-center'>Price</th>
                            <th className='border border-success text- font-extrabold text-center'>Status</th>
                            <th className='border border-success text- font-extrabold text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            adminclass?.map((instclass, index) =>
                                <tr key={instclass?._id}>
                                    <th className='border border-success text-md'>{index + 1}</th>
                                    <td className='border border-success text-md'><img className='rounded-full w-[40px] h-[40px]' src={instclass?.image} alt="" /></td>
                                    <td className='border border-success text-md'>{instclass?.classname}</td>
                                    <td className='border border-success text-md'>{instclass?.instructor}</td>
                                    <td className='border border-success text-md'>{instclass?.email}</td>
                                    <td className='border border-success text-md'>{instclass?.seats}</td>
                                    <td className='border border-success text-md'>{instclass?.price}</td>
                                    <td className='border border-success text-md'>{instclass?.status}</td>
                                    <td className='border border-success text-md flex flex-row gap-1'>
                                        <button onClick={() => handleApproved(instclass?._id)} disabled={instclass?.status === 'approved' || instclass?.status === 'denied'} className='btn btn-success btn-sm text-xs'>Approved</button>
                                        <button onClick={() => handleDenied(instclass?._id)} disabled={instclass?.status === 'approved' || instclass?.status === 'denied'} className='btn btn-info btn-sm text-xs'>Deny </button>
                                        <Link to={`/dashboard/feedback/${instclass?._id}`}><button disabled={instclass?.status === 'approved' || instclass?.status === 'pending'} className='btn btn-warning btn-sm text-xs' >feedback</button></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageClasses;