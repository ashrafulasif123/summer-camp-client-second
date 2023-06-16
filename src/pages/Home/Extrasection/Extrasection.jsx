import React from 'react';
import { motion } from 'framer-motion';

const Extrasection = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} className=" my-5 hero h-[400px] mix-blend-luminosity" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/121035484/photo/sports-balls-on-grass-from-above.jpg?s=1024x1024&w=is&k=20&c=LH8IbGN4nx9NPV-AVNYsz-xmYQh4oorM3K9gw3eipwc=)', backgroundPosition: 'center' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">SPORTS</h1>
                    <p className="mb-5">Sports encompass a diverse range of activities enjoyed globally. From the exhilarating thrill of football (soccer) with its goal-scoring frenzy to the dynamic intensity of basketball where players soar through the air, each sport has its unique appeal. Tennis demands finesse as athletes strategically wield their rackets, while cricket showcases strategic prowess and skillful batting.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Extrasection;