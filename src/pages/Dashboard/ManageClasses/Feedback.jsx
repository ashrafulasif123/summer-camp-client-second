import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosProtected from '../../../hooks/useAxiosProtected';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Feedback = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [axiosProtect] =  useAxiosProtected()
    const handleSubmit = event =>{
        event.preventDefault()
        // const feedBk = event.target.feedback.value;
        // console.log(id, feedBk)
        axiosProtect.patch(`/users/adminfeedback/${id}`, {feedBk : event.target.feedback.value})
        .then(data =>{
            if (data.modifiedCount > 0) {
                
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Your Feedback is done',
                    showConfirmButton: false,
                    timer: 2500
                })
                navigate('/dashboard/manageclass')
            }
        })
    }
    
    return (
        <div className='w-full text-center'>
            <Helmet>
                <title>
                    Feedback | Sports Exut
                </title>
            </Helmet>
            <h2 className='text-3xl my-3 font-bold text-success'>Admins Feedback</h2>
            <form onSubmit={handleSubmit} className=''>
                <textarea required name='feedback' placeholder="FeedBack" className="textarea textarea-bordered w-1/2 textarea-lg h-44 mb-4" ></textarea> <br />
                <button type='submit' className='btn btn-lg btn-success'>Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;