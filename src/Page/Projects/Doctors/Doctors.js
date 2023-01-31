import React from 'react';
const docImage = [
    { img: "https://i.ibb.co/SnG8Nk0/doc2.png" },
    { img: "https://i.ibb.co/TBC7ZDs/doc3.png" },
    { img: "https://i.ibb.co/Tb4TnCD/doc5.png" },
    { img: "https://i.ibb.co/C8CF07D/doc4.png" },
]

const Doctors = () => {
    return (
        <section>
            <h1 className='text-4xl text-center font-bold'>Doctors Portal</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-4'>
                {
                    docImage.map(image =>
                        <img className='h-80 w-full rounded hover:border border-blue-400 cursor-pointer' src={image.img} alt="" />
                    )
                }
                <div>
                    <a className='btn btn-sm mr-5 hover:bg-blue-600' href="https://doctors-portal-24-7.netlify.app/">Live Site</a>
                    <a className='btn btn-sm hover:bg-blue-600' href="https://github.com/Sakil71/doctors-portal">Server Site</a>
                </div>
            </div>
            <div className='p-4'>
                <h1 className='text-2xl font-bold'>Details:</h1>
                <ul>
                    <li>Firstly, a user must log in or sign up here.</li>
                    <li>There are a home, navbar, appointment, about, reviews, contact, dashboard and user profile page in this application.</li>
                    <li>In appointment page, user can selected any treatment by date.</li>
                    <li>If one treatment is selected before in that day, therefore this treatment is disable for this user.</li>
                    <li>There is a admin pannel. He/She added a doctor, remove any user etc.</li>
                </ul>
                <h1 className='text-2xl font-bold'>Used Technology: <span className='text-sm'>
                    React.js, React router dom, Tailwind CSS, Daisi UI, Day Peacker, React Query, Firebase, Node.js, MongoDb</span></h1>
            </div>
        </section>
    );
};

export default Doctors;