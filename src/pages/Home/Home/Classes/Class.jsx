import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../../../hooks/useAdmin';
import useInstructor from '../../../../hooks/useInstructor';
import useAxiosProtected from '../../../../hooks/useAxiosProtected';
import { motion } from 'framer-motion';

const Class = ({ clas }) => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [axiosProtect] = useAxiosProtected()
    const { classname, instructor, email, seats, price, image, enrolledstudent, _id } = clas;
    const navigate = useNavigate()
    const handleCourse = selectclass => {
        if (!user?.email) {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'log in before selecting the course',
                showConfirmButton: false,
                timer: 2500
            })
            return navigate('/login')
        }
        const classCart = {
            classId: _id, classname, instructor, price, seats, useremail: user?.email, enrolledstudent
        }
        axiosProtect.post('http://localhost:5000/classcart', classCart)
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'You have Successfully added',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
                else {
                    Swal.fire({
                        position: 'middle',
                        icon: 'error',
                        title: 'This Class Already exist',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })

    }

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0 }} className={seats === 0 ? 'bg-red-400 text-white card shadow-xl' : 'bg-base-100 card shadow-xl'} >
            <figure className="px-10 pt-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                ><img src={image} alt="Shoes" className="rounded-xl" /> </motion.div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{classname}</h2>
                <p><span className='font-semibold'>Instructor Name:</span> {instructor}</p>
                <p><span className='font-semibold'>Available Seats:</span> {seats}</p>
                <p><span className='font-semibold'>Price: </span>${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleCourse(clas)} disabled={seats === 0 || isAdmin || isInstructor} className="btn btn-success">Select Class</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Class;

/**
 * Image
Name
Instructor name
Available seats
Price
Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
Available seats are 0
Logged in as admin/instructor
The class card background will be red if the available seats are 0.
 */