import React from 'react'



const Navbar = () => {
  return (
    <div className='flex w-full px-12 py-4 items-center justify-between'>
      <div className='flex items-center gap-6'>
        <img 
          className='h-17 w-17 object-cover rounded-full outline-none '
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQIblZRp04cQDDMOzqeAZg2c3EwntqPNL-A&s" alt="" />
        <h2 className='bg-red-400 px-5 rounded-3xl text-white font-bold border-2 text-xl'>Home</h2>
      </div>
      <div className='flex justify-between w-[50%] items-center'>
        <div className='flex items-center  pr-9 pl-2 py-1 rounded-3xl gap-2 border-2 text-white bg-red-400'>
          <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <input className='outline-none text-white' type="text" placeholder='Search' />
        </div>
        <h3 className='text-lg font-medium text-white'>Movies</h3>
        <h3 className='text-lg font-medium text-white'>Settings</h3>
        <h3 className='text-lg font-medium text-white'>About</h3>
      </div>
    </div>
  )
}

export default Navbar