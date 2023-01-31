import React from 'react';
const emaImage = [
    { img: "https://i.ibb.co/mTv6MDx/emajon2.png" },
    { img: "https://i.ibb.co/NWSLS8v/emajon3.png" },
    { img: "https://i.ibb.co/GcQfMRP/emajon4.png" },
]

const Emazon = () => {
    return (
        <section>
            <h1 className='text-4xl text-center font-bold'>Emazon Shopping</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                {
                    emaImage.map((image, i) =>
                        <img key={i} className='h-80 w-full rounded hover:border border-blue-400 cursor-pointer' src={image.img} alt="" />

                    )
                }
                <div>
                    <a className='btn btn-sm mr-5 hover:bg-blue-600' href="https://ema-john-24h.netlify.app/">Live Site</a>
                    <a className='btn btn-sm hover:bg-blue-600' href="https://github.com/Sakil71/ema-john-shopping">Server Site</a>
                </div>

            </div>
            <div className='p-4'>
                <h1 className='text-2xl font-bold'>Details:</h1>
                <ul>
                    <li>It is a online shopping application.</li>
                    <li>A user csn add any product and buy more product at once.</li>
                    <li>There is a Order review page. Here shown that selected products price and quantities.</li>
                    <li>There is also shown that shipping fee, tax fee and grand total amount.</li>
                    <li>User can clear his/her order clicking by button.</li>
                </ul>
                <h1 className='text-2xl font-bold'>Used Technology: <span className='text-sm'>
                    React.js, React router dom, Tailwind CSS, Firebase, Local Storage</span></h1>
            </div>
        </section>
    );
};

export default Emazon;