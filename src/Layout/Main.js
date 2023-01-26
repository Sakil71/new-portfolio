import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Page/LeftNav/LeftNav';

const Main = () => {
    return (
        <div className='flex'>
            <div className='hidden md:block lg:block'>
                <LeftNav></LeftNav>
            </div>
            <div className='bg-slate-400 w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;