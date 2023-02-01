import React from 'react';
import { useState } from 'react';
import arrow from '../../assets/arrow-left-solid.svg'
import shakil from '../../assets/Shakil AHamed.jpg'
import { FaCertificate, FaDownload, FaHome, FaInfoCircle, FaMicroblog, FaProjectDiagram, FaRegIdBadge } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pdf from '../../assets/Shakil Ahamed (2).pdf'

const LeftNav = () => {
    const [open, setOpen] = useState(true);

    const menus = [
        { title: 'Home', href: '/', icon: <FaHome></FaHome> },
        { title: 'Projects', href: 'projects', icon: <FaProjectDiagram></FaProjectDiagram> },
        { title: 'Skills', href: 'skills', icon: <FaCertificate></FaCertificate>, gap:true},
        { title: 'About', href: 'about', icon: <FaInfoCircle></FaInfoCircle> },
        { title: 'Blog', href: 'blog', icon: <FaMicroblog></FaMicroblog>, gap:true},
        { title: 'Contact', href: 'contact', icon: <FaRegIdBadge></FaRegIdBadge> },
    ]

    return (
        <div className='flex'>
            <div className={`${open ? 'w-20 md:w-40 lg:w-56' : 'w-20'} min-h-screen duration-500 bg-dark-purple relative p-4 pt-8`}>
                <img
                    className={`absolute hidden lg:block md:block cursor-pointer -right-3 top-8 w-7 border-2 p-1 border-dark-purple rounded-full bg-white ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                    src={arrow} alt="" />

                <div className='flex gap-x-4 items-center'>
                    <img className={`duration-300 w-10 h-10 rounded-full`} src={shakil} alt="" />

                    <h1 className={`text-yellow-300 hidden md:block lg:block origin-left font-medium text-sm duration-500 font-Josefin ${!open && "scale-0"}`}>Shakil Ahamed</h1>
                </div>

                <div>
                    <ul className='pt-6'>
                        {
                            menus.map((menu, index) =>
                                <Link to={menu.href} key={index} className={`text-gray-300 font-amita flex items-center gap-x-4 py-2 hover:bg-light-white rounded-md px-3 ${menu.gap ? 'mt-9' : 'mt-2'}`}>
                                    <span className='text-3xl font-semibold'>{menu.icon}</span>

                                    <span className={`text-sm hidden md:block lg:block ${!open && 'scale-0'}`}>{menu.title}</span>
                                </Link>
                            )
                        }
                    </ul>
                </div>
                <a href={pdf} download className={`text-gray-300 font-amita flex items-center justify-center gap-x-4 hover:bg-light-white rounded-md px-5 lg:justify-start md:justify-start mt-9 btn btn-outline hover:text-yellow-400`}>
                    <span className='text-2xl'><FaDownload></FaDownload></span>
                    <span className={`text-xs hidden md:block lg:blo'
                     ${!open && 'scale-0'}`}>My Resume</span>
                </a>
            </div>
        </div>
    );
};

export default LeftNav;