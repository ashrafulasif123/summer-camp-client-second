import React from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
    return (
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }} className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://images.pexels.com/photos/9828007/pexels-photo-9828007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full max-h-screen'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-20 left-20'>
                    <h1 className='text-6xl text-yellow-400'>Cricket</h1>
                    <p className='w-3/4 md:w-1/2 text-primary text-sm md:text-2xl font-extrabold  mt-5'>Cricket is a popular sport that originated in England in the late 16th century and is now played in many countries around the world. It is a bat-and-ball game played between two teams of 11 players each. The objective of the game is to score more runs than the opposing team while also getting all the opposition players out.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full max-h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 z-20 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-20 left-20'>
                    <h1 className='text-6xl text-yellow-400'>Football</h1>
                    <p className='w-3/4 md:w-1/2 text-primary text-sm md:text-2xl font-extrabold tex mt-5'>Football, also known as soccer in some parts of the world, is the most popular sport globally. It is played between two teams, each consisting of 11 players, with the objective of scoring goals by kicking a round ball into the opponent's net</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/3755445/pexels-photo-3755445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full max-h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 z-20 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-20 left-20'>
                    <h1 className='text-6xl text-yellow-400'>Basketball</h1>
                    <p className='w-3/4 md:w-1/2 text-primary text-sm md:text-2xl font-extrabold tex mt-5'>Basketball is a popular team sport played around the world, known for its fast-paced action and high-scoring nature. It is played between two teams, with each team consisting of five players. The objective is to score points by shooting the ball through the opponent's hoop and prevent the opposing team from scoring</p>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/12806333/pexels-photo-12806333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full max-h-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 z-20 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-20 left-20'>
                    <h1 className='text-6xl text-yellow-400'>Badminton</h1>
                    <p className='w-3/4 md:w-1/2 text-primary text-sm md:text-2xl font-extrabold tex mt-5'>Badminton is a popular racket sport played worldwide. It is a fast-paced game that can be played in singles (one player per side) or doubles (two players per side). The objective is to hit the shuttlecock over the net so that it lands in the opponent's court and score points</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Slider;