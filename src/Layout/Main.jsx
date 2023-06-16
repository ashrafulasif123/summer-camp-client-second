import React from 'react';
import NavMenu from '../pages/Shared/NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;