import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Page/LeftNav/LeftNav';
import Navbar from '../Page/Navbar/Navbar';

const Main = () => {
    return (
        <div className='flex'>
            <div className='hidden md:block lg:block'>
                <LeftNav></LeftNav>
            </div>
            <div className='w-full'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;