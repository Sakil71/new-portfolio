import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='md:flex lg:flex'>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="w-full max-w-md">
          <form className="p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" for="name">
                Name
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" for="email">
                Email
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" for="message">
                Message
              </label>
              <textarea
                className="border border-gray-400 p-2 rounded-lg w-full"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className='md:w-2/4 lg:w-2/4 w-full md:py-48 lg:py-52'>
        <div className='flex gap-5 text-4xl items-center justify-center'>
          <a className='text-blue-600' target="_blank" href="https://www.facebook.com/sakil2171"> <FaFacebook></FaFacebook></a>
          <a target="_blank" href="https://github.com/Sakil71/Sakil71"> <FaGithub></FaGithub></a>
          <a target="_blank" className='text-blue-600' href="https://twitter.com/ShakilA42712830"><FaTwitter></FaTwitter></a>
        </div>
        <div className='text-center mt-5'>
          <h1>+8801794-267010</h1>
          <a href='https://mail.google.com/mail/u/1/#inbox?compose=CllgCJqWgZwzJtkdpmBQKbkCBLxJSrCtlfNPjQSDBXhKwnMlkgVPwJbCbHVNjqSjHjVxpbZTkmL' className='text-black font-semibold'>sakilahamed7810@gmail.com</a>
          <h1 className='text-black font-bold'>Dhanmondi, Dhaka, Bangladesh</h1>
        </div>
      </div>
    </section>

  );
};

export default Contact;