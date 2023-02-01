import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const projectsImage = [
    { name: "Doctors Portal", navigate:'doc', img: "https://i.ibb.co/kSmBXcv/doc1.png", live:'https://doctors-portal-24-7.netlify.app/', server: 'https://github.com/Sakil71/doctors-portal' },
    { name: "Fitness Club", navigate:'gym', img: "https://i.ibb.co/mDCbkHL/fitness-1.png", live:'https://fitnes-club-01.netlify.app', server: 'https://github.com/Sakil71/ultra-active-club' },
    { name: "Emajon", navigate:'ema', img: "https://i.ibb.co/Bn9zXRR/emajon1.png", live:'https://ema-john-24h.netlify.app/', server: 'https://github.com/Sakil71/ema-john-shopping' },
]

const Projects = () => {
    return (
        <section>
            <h1 className='text-center text-3xl font-bold text-black'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-8'>
                {
                    projectsImage.map((image, i) =>
                        <div className='group'>
                            <div className='relative overflow-hidden border rounded bg-indigo-600 shadow-xl' data-aos="zoom-in">
                                <img className={`w-full h-64`} key={i} src={image.img} alt="" />

                                <div className='flex justify-around my-4'>
                                    <h1 className='text-yellow-300 text-3xl font-amita font-bold'>{image.name}</h1>
                                    <Link to={image.navigate} className='btn btn-outline btn-warning btn-sm'>Details</Link>
                                </div>


                                <div className='absolute w-full h-64 bg-black/80 flex items-center justify-center -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100  duration-700 cursor-pointer rounded border border-yellow-400'>
                                    <div className='text-center'>
                                        <h1 className='text-yellow-300 text-3xl font-amita font-bold mb-5'>{image.name}</h1>
                                        <a href={image.live} className='btn btn-primary btn-sm mr-5 mb-4 md:mb-0 lg:mb-0'>Server Site</a>
                                        <a href={image.server} className='btn btn-primary btn-sm'>Client Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Projects;