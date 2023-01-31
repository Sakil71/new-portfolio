import React from 'react';
const gymImage = [
    { img: "https://i.ibb.co/DRxY0LG/fitness-4.png" },
    { img: "https://i.ibb.co/MGWpVvS/fitness-3.png" },
    { img: "https://i.ibb.co/Hg6VLfR/fitness-2.png" }
]

const Gymnasium = () => {
    return (
        <section>
            <h1 className='text-4xl text-center font-bold'>Fitness Club</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                {
                    gymImage.map(image =>
                        <img className='h-80 w-full rounded hover:border border-blue-400 cursor-pointer' src={image.img} alt="" />
                    )
                }
                <div>
                    <a className='btn btn-sm mr-5 hover:bg-blue-600' href="https://fitnes-club-01.netlify.app">Live Site</a>
                    <a className='btn btn-sm hover:bg-blue-600' href="https://github.com/Sakil71/ultra-active-club">Server Site</a>
                </div>
            </div>
            <div className='p-4'>
                <h1 className='text-2xl font-bold'>Details:</h1>
                <ul>
                    <li>It is a Gymnasium site.</li>
                    <li>User can be set exercise time manually.</li>
                    <li>User check his/her weight, height or age.</li>
                    <li>There are some card about exercise name, age & time.</li>
                    <li>If all the activities done in a day then user congratulated.</li>
                </ul>
                <h1 className='text-2xl font-bold'>Used Technology: <span className='text-sm'>
                    React.js, Bootstrap, CSS3, react-toastify, React router dom</span></h1>
            </div>
        </section>
    );
};

export default Gymnasium;