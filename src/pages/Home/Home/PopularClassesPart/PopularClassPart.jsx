import React from 'react';
import { motion } from 'framer-motion';


const PopularClassPart = ({ popularclass }) => {
    const { classname, instructor, email, seats, price, image, enrolledstudent, _id } = popularclass;
    return (
        <>
           
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.0 }}  >
                <figure className="px-10 pt-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    ><img src={image} alt="Shoes" className="rounded-xl" /> </motion.div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classname}</h2>
                    <p><span className='font-semibold'>Enrolled Student:</span> {enrolledstudent}</p>
                <p><span className='font-semibold'>Available Seats:</span> {seats}</p>
                {/* <p><span className='font-semibold'>Price: </span>${price}</p> */}
                </div>
            </motion.div>
        </>
    );
};

export default PopularClassPart;