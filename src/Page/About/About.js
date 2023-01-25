import React from 'react';
import sakil from '../../assets/Shakil AHamed.jpg'

const About = () => {
    return (
        <div data-aos="zoom-in" className="hero min-h-screen w-3/4 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={sakil} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Shakil Ahamed</h1>
                    <p className="py-6 font-semibold text-justify">I am twenty one years old. I am doing my B.Sc in Computer Science and Engineering at Dhaka International University right now and I specialize in Web Designing and Development. I am working as a full-stack developer for the past years, and I have extensive experience with both front-end and back-end development. I have a deep interest in Web Development and I made some full-stack projects using React, Node, and MongoDB.</p>
                    <button className="btn btn-primary btn-sm w-full">My CV</button>
                </div>
            </div>
        </div>
    );
};

export default About;