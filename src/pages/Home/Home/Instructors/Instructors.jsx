import React, { useEffect, useState } from 'react';
import useTotalInstructor from '../../../../hooks/useTotalInstructor';
import { Helmet } from 'react-helmet-async';



const Instructors = () => {
    const { instructor } = useTotalInstructor()

    return (
        <div>
            <h2 className='text-center text-3xl my-5 font-extrabold text-success'>All Instructors</h2>
            <Helmet>
                <title>
                    Instructor | Sports Exut
                </title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table w-3/4 mx-auto mt-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-center text-lg border-green-600 border-2'>Serial</th>
                            <th className='text-center text-lg border-green-600 border-2'>Image</th>
                            <th className='text-center text-lg border-green-600 border-2'>Instructor Name</th>
                            <th className='text-center text-lg border-green-600 border-2'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructor?.map((inst, index) => (
                                <tr key={inst?._id}>
                                    <td className='border border-success text-lg bg-green-100 text-center'>
                                        {index + 1}
                                    </td>
                                    <td className='border border-success text-lg bg-green-100 text-center'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={inst.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border border-success text-lg bg-green-100 text-center'>
                                        {inst.name}
                                    </td>
                                    <td className='border border-success text-lg bg-green-100 text-center'>{inst.email}</td>
                                </tr>
                            )

                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Instructors;