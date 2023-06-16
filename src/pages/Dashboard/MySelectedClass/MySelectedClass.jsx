import React from 'react';

import useAxiosProtected from '../../../hooks/useAxiosProtected';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MySelectedClass = () => {
    const { cartclasses, refetch } = useCart()
    const totalPrice = cartclasses.reduce((sum, item) => item.price + sum, 0)

    const [axiosProtect] = useAxiosProtected()
    const handleDelete = id => {

        axiosProtect.delete(`/classcart/${id}`)
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Your Class is Successfully Deleted',
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
                        Selected Class | Sports Exut
                    </title>
                </Helmet>
                {
                    cartclasses?.length === 0
                        ? <p className='text-white bg-fuchsia-600 w-1/2 mx-auto text-3xl text-center p-5'>No Class is Selected</p>
                        :
                        <>
                            <div className='text-center'>
                                <h2 className='font-extrabold text-success text-3xl text-center p-4'>Total Price: ${totalPrice} </h2>
                                <Link to='/dashboard/pay'><button className='btn btn-primary mb-4 w-32 text-xl'>Pay</button></Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th className='border border-success text- font-extrabold text-center'>Serial</th>
                                            <th className='border border-success text- font-extrabold text-center'>Class Name</th>
                                            <th className='border border-success text- font-extrabold text-center'>Email</th>
                                            <th className='border border-success text- font-extrabold text-center'>Price</th>
                                            <th className='border border-success text- font-extrabold text-center'>Seats</th>
                                            <th className='border border-success text- font-extrabold text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            cartclasses?.map((cartclass, index) =>
                                                <tr key={cartclass._id}>
                                                    <th className='border border-success text-md'>{index + 1}</th>
                                                    <td className='border border-success text-md'>{cartclass?.classname}</td>
                                                    <td className='border border-success text-md'>{cartclass?.useremail}</td>
                                                    <td className='border border-success text-md'>$ {cartclass?.price}</td>
                                                    <td className='border border-success text-md'>{cartclass?.seats}</td>
                                                    <td className='border border-success text-md flex flex-row gap-1'>
                                                        <button onClick={() => handleDelete(cartclass?._id)} className='btn btn-error btn-sm text-xs'>Delete</button>

                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                }

            </>

        </div>
    );
};

export default MySelectedClass;