import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Page/LeftNav/LeftNav';

const Main = () => {
    return (
        <div className='flex'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='bg-slate-400 w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;