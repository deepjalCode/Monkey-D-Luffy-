import React from 'react'
import Member from './Member'

const LeftSection = (props) => {
  return (
    
    <div className='w-[40%] bg-gray-200 px-12 py-3'>
      <div className='bg-pink-200 flex px-1 py-1 rounded-tl-4xl rounded-bl-xl rounded-2xl'>
        <img 
          className='h-26 w-30 object-cover rounded-tr-xl rounded-bl-xl rounded-tl-4xl rounded-br-4xl '
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqU3BhraKoJ5i52OV1C5k0z-DEG8xhi-mmcw&s" alt="" />
        <div className='flex flex-col items-start justify-center  px-2'>
          <h3 className='text-white text-xl  font-bold mb-1'>Color Code</h3>
          <div className='flex gap-2'>
            <div className='h-15 w-15 bg-purple-300 rounded-xl px-2 py-1'></div>
            <div className='h-15 w-15 bg-yellow-400 rounded-xl px-2 py-1'></div>
            <div className='h-15 w-15 bg-red-400 rounded-xl px-2 py-1'></div>
          </div>
        </div>
      </div>
      <Member onePieceCharacters={props.onePieceCharacters}/>
    </div>
  )
}

export default LeftSection