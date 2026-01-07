import React from 'react'

const Card = (props) => {
  return (
    <div className=' h-1/2 rounded-tl-4xl rounded-br-2xl rounded gap-3 flex flex-col '>
      {props.pirates.map(function(elem, idx){
        return <div key={idx} className='flex px-4 py-2 flex-col items-center bg-white/30 backdrop-blur-xl border-2 text-white  rounded-tl-4xl rounded-br-2xl rounded'>
        <img className='object-cover h-22 rounded-tl-4xl rounded w-full' src={elem.url} alt="" /> 
        <h1 className='text-lg'>{elem.occupation}</h1> 
        <p className='text-sm font-extralight leading-4'>{elem.description}</p>
      </div>
      })}
      
      
    </div>
  )
}

export default Card