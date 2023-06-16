import React from 'react';
import useClass from '../../../hooks/useClass';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {
    const { instructorclass } = useClass()
    return (
        <>
        <Helmet>
                <title>
                    My Class | Sports Exut
                </title>
            </Helmet>
            <h2 className='font-extrabold text-success text-3xl text-center p-4'>Instructor Class</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='border border-success text-center font-extrabold'>Serial</th>
                            <th className='border border-success text-center font-extrabold'>Class <br /> name</th>
                            <th className='border border-success text-center font-extrabold'>Instructor <br /> name</th>
                            <th className='border border-success text-center font-extrabold'>Instructor <br /> email</th>
                            <th className='border border-success text-center font-extrabold'>Available <br /> seats</th>
                            <th className='border border-success text-center font-extrabold'>Price</th>
                            <th className='border border-success text-center font-extrabold'>Enrolled <br /> Student</th>
                            <th className='border border-success text-center font-extrabold'>Status</th>
                            <th className='border border-success text-center font-extrabold'>Feedback </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            instructorclass?.map((instclass, index) =>
                                <tr key={instclass?._id}>
                                    <th className='border border-success text-md'>{index + 1}</th>
                                    <td className='border border-success text-md'>{instclass?.classname}</td>
                                    <td className='border border-success text-md'>{instclass?.instructor}</td>
                                    <td className='border border-success text-md'>{instclass?.email}</td>
                                    <td className='border border-success text-md'>{instclass?.seats}</td>
                                    <td className='border border-success text-md'>{instclass?.price}</td>
                                    <td className='border border-success text-md'>{instclass?.enrolledstudent}</td>
                                    <td className='border border-success text-md'>{instclass?.status}</td>
                                    <td className='border border-success text-md'>{instclass?.feedback?.feedBk}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </>

    );
};

export default MyClass;