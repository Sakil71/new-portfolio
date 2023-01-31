import React from 'react';
const skillImages = [
    { name: "HTML5", skill: "Advanced", url: 'https://i.ibb.co/XWRsGM6/html5.jpg' },
    { name: "CSS3", skill: "Advanced", url: 'https://i.ibb.co/3MxfDRX/css3.jpg' },
    { name: "Bootstarp", skill: "Advanced", url: 'https://i.ibb.co/v424vnL/bootstrap.png' },
    { name: "Tailwind CSS", skill: "Advanced", url: 'https://i.ibb.co/NSPGktG/tailwind.png' },
    { name: "JavaScript", skill: "Intermediate", url: 'https://i.ibb.co/d4qFswy/java-Script.jpg' },
    { name: "React.js", skill: "Advance", url: 'https://i.ibb.co/6DSJpsj/react.jpg' },
    { name: "Node.js", skill: "Intermediate", url: 'https://i.ibb.co/2ckKr0Z/nodejs.jpg' },
    { name: "Firebase", skill: "Advanced", url: 'https://i.ibb.co/sFqbZ93/firebase.png' },
    { name: "MongoDb", skill: "Intermediate", url: 'https://i.ibb.co/jvHTbJ8/mongoDb.jpg' },
]

const Skills = () => {
    return (

        <section>
            <h1 className='text-center text-3xl font-bold mt-5 text-black'>Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8'>
                {
                    skillImages.map((image, i) =>
                        <div className='group'>
                            <div className='relative overflow-hidden' data-aos="zoom-in">
                                <img className={`w-full lg:w-72 md:w-72 h-40 rounded`} key={i} src={image.url} alt="" />

                                <div className='absolute w-full lg:w-72 md:w-72 h-40 bg-black/80 flex items-center justify-center -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100  duration-700 cursor-pointer rounded border border-yellow-400'>
                                    <div>
                                        <h1 className='text-yellow-300 text-3xl font-amita font-bold'>{image.name}</h1>
                                        <h2 className='text-yellow-300 text-xl font-amita font-bold'>{image.skill}</h2>
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

export default Skills