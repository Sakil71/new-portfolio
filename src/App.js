import { useState } from 'react';
import './App.css';
import arrow from './assets/arrow-left-solid.svg'
import { FaHome } from 'react-icons/fa';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-500 w-72 h-screen bg-dark-purple relative p-5`}>
        <img
          className={`absolute cursor-pointer -right-3 top-8 w-7 border-2 p-1 border-dark-purple rounded-full bg-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          src={arrow} alt="" />

        <div className='flex gap-x-4 items-center'>
          <FaHome className='text-white cursor-pointer duration-500 text-3xl'></FaHome>
          <h1 className='text-white origin-left font-medium text-xl duration-300'>Home</h1>
        </div>
      </div>

      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
