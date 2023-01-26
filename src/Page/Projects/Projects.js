import React from 'react';
import { Link } from 'react-router-dom';

const projectsImage = [
    // {img: "https://i.ibb.co/DRxY0LG/fitness-4.png"},
    // {img: "https://i.ibb.co/MGWpVvS/fitness-3.png"},
    // {img: "https://i.ibb.co/Hg6VLfR/fitness-2.png"},
    {name:"Fitness Club", img: "https://i.ibb.co/mDCbkHL/fitness-1.png" },
    // {img: "https://i.ibb.co/NWSLS8v/emajon3.png"},
    // {img: "https://i.ibb.co/GcQfMRP/emajon4.png"},
    // {img: "https://i.ibb.co/mTv6MDx/emajon2.png"},
    {name:"Emajon", img: "https://i.ibb.co/Bn9zXRR/emajon1.png" },
    // {img: "https://i.ibb.co/Tb4TnCD/doc5.png"},
    // {img: "https://i.ibb.co/TBC7ZDs/doc3.png"},
    // {img: "https://i.ibb.co/C8CF07D/doc4.png"},
    // {img: "https://i.ibb.co/SnG8Nk0/doc2.png"},
    {name:"Doctors Portal", img: "https://i.ibb.co/kSmBXcv/doc1.png" },
]

const Projects = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-8'>
            {
                projectsImage.map((image, i) =>
                    <div className='group'>
                        <div className='relative overflow-hidden border rounded bg-indigo-600 shadow-xl' data-aos="zoom-in">
                            <img className={`w-full h-64 `} key={i} src={image.img} alt="" />

                            <div className='flex justify-around my-4'>
                                <h1 className='text-yellow-300 text-3xl font-amita font-bold'>{image.name}</h1>
                                <Link className='btn btn-outline btn-warning btn-sm'>Details</Link>
                            </div>


                            <div className='absolute w-full h-64 bg-black/80 flex items-center justify-center -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100  duration-700 cursor-pointer rounded border border-yellow-400'>
                                <div className='text-center'>
                                    <h1 className='text-yellow-300 text-3xl font-amita font-bold mb-5'>{image.name}</h1>
                                    <Link to='/' className='btn btn-primary btn-sm mr-5'>Server Site</Link>
                                    <Link to='/' className='btn btn-primary btn-sm'>Client Site</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Projects;