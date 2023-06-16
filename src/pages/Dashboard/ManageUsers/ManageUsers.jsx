import React from 'react';
import useUsers from '../../../hooks/useUsers';
import useAxiosProtected from '../../../hooks/useAxiosProtected';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {
    const { users, refetch } = useUsers()
    const [axiosProtect] = useAxiosProtected()
    const handleInstructor = _id => {

        axiosProtect.patch(`/users/instructorrole/${_id}`)
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Selected User is Instructor',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
    }
    const handleAdmin = _id => {
        axiosProtect.patch(`/users/adminrole/${_id}`)
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Selected User is Admin',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
    }
    return (
        <div>
            <>
            <Helmet>
                <title>
                    Manage User | Sports Exut
                </title>
            </Helmet>
                <h2 className='font-extrabold text-success text-3xl text-center p-4'>Manage Users</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='border border-success text- font-extrabold text-center'>Serial</th>
                                <th className='border border-success text- font-extrabold text-center'>User name</th>
                                <th className='border border-success text- font-extrabold text-center'>User Email</th>
                                <th className='border border-success text- font-extrabold text-center'>Role</th>
                                <th className='border border-success text- font-extrabold text-center'>Action</th>
                             </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user, index) =>
                                    <tr>
                                        <th className='border border-success text-md'>{index + 1}</th>
                                        <td className='border border-success text-md'>{user?.name}</td>
                                        <td className='border border-success text-md'>{user?.email}</td>
                                        <td className='border border-success text-md'>{user?.role}</td>
                                         <td className='border border-success text-md flex flex-row gap-1'>
                                            <button onClick={() => handleInstructor(user?._id)} disabled={user?.role === 'instructor' } className='btn btn-success btn-sm text-xs'>Make Instructor</button>
                                            <button onClick={() => handleAdmin(user?._id)} disabled={user?.role === 'admin' } className='btn btn-info btn-sm text-xs'>Make Admin </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>

        </div>
    );
};

export default ManageUsers;