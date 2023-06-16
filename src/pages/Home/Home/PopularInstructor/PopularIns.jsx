import React from 'react';
import { motion } from 'framer-motion';

const PopularIns = ({ins}) => {
    const {name, image} = ins
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0 }} >
            <figure className="px-10 pt-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                ><img src={image} alt="Shoes" className="rounded-xl h-56 w-full" /> </motion.div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </motion.div>
    );
};

export default PopularIns;