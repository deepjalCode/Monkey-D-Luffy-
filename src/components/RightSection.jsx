import React from 'react'
import Card from './Card'

const RightSection = () => {
  return (
    <div className='bg-gray-700 w-[50%]  flex px-3 py-1'>
      <div className='w-[30%] flex gap-3 flex-col '>
          <Card />
          <Card />
      </div>
      <div className='bg-yellow-300 w-[70%] px-3 py-1 rounded-tl-2xl rounded-tr-4xl rounded ml-3'>
        para
      </div>
     

    </div>
  )
}

export default RightSection