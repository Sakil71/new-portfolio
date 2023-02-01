import React from 'react';
import sakil from '../../assets/Shakil AHamed.jpg'
import pdf from '../../assets/Shakil Ahamed (2).pdf'

const About = () => {
    return (
        <section>
            <h1 className='text-center text-3xl font-bold mt-5'>About</h1>
            <div className="hero w-3/4 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={sakil} alt='' className="lg:w-96 md:w-96 w-96 rounded-lg " />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Shakil Ahamed</h1>
                        <p className=" font-semibold text-justify">I am twenty one years old. I am doing my B.Sc in Computer Science and Engineering at Dhaka International University right now and I specialize in Web Designing and Development. I am working as a full-stack developer for the past years, and I have extensive experience with both front-end and back-end development. I have a deep interest in Web Development and I made some full-stack projects using React, Node, and MongoDB.</p>
                        <a download href={pdf}><button className="btn btn-primary btn-sm w-full">My Resume</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;