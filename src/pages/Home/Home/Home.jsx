import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './Slider/Slider';
import Extrasection from '../Extrasection/Extrasection';
import PopularClassesPart from './PopularClassesPart/PopularClassesPart';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import './Home.css'



const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <Helmet>
                <title>
                    Home | Sports Exut
                </title>
            </Helmet>
            <center><button className='my-8 btn btn-outline bg-green-400 border-0 hover:bg-green-' onClick={toggleTheme}>{isDarkTheme ? 'Light Theme' : 'Dark Theme'}</button></center>
            <Slider></Slider>
            <PopularClassesPart></PopularClassesPart>
            <PopularInstructor></PopularInstructor>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;