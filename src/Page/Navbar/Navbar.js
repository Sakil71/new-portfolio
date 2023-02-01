import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pdf from '../../assets/Shakil Ahamed (2).pdf'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 lg:hidden md:hidden">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='skills'>Skills</Link>
                            <Link to='projects'>projects</Link>
                            <Link to='about'>About</Link>
                            <Link to='blog'>Blog</Link>
                            <Link to='contact'>Contact</Link>
                            <a href={pdf} download>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href='/' className="btn btn-ghost normal-case text-xl font-bold">Shakil Ahamed</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle hover:bg-yellow-300">
                    <a href={pdf} download><FaDownload></FaDownload></a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;