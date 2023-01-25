import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className="hero h-screen" style={{ backgroundImage: `url("https://i.ibb.co/wp0tH5n/bg.jpg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">Hello I'm <br /><span className='text-5xl'>Shakil Ahamed</span></h1>

                        <main className='mockup-window border border-base-300'>
                            <section className="animation">
                                <div className="first">
                                    <div className='rounded text-2xl font-semibold text-yellow-300'>Frontend Web Developer
                                    </div>
                                </div>

                                <div className="second">
                                    <div className='rounded text-2xl font-semibold text-yellow-300'>B.Sc in CSE
                                    </div>
                                </div>

                                <div className="third">
                                    <div className=' rounded text-xl lg:text-2xl font-semibold text-yellow-400'>Dhaka International University
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;