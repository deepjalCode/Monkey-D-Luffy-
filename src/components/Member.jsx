import React from 'react'

const Member = (props) => {
  console.log(props.onePieceCharacters)
  
  
  return ( 
          <div className='flex items-center flex-col  mt-3  gap-2 px-4 py-3  '>
            {props.onePieceCharacters.map(function(idx,elem){

              return <div className='flex items-center gap-3 mb-3 bg-pink-200 px-3 rounded-4xl'>
                <img 
                className='h-16 w-16 object-cover rounded outline-white' 
              src={idx.url} alt="" />
              <div>
                <h2 className='text-white font-bold'>{idx.name}</h2>
                <p className='  text-white '>{idx.description} </p>
              </div>
              <svg 
              className=' flex h-10 w-10 items-center bg-red-800 text-white  rounded-full self-center'
              xmlns="http://www.w3.org/2000/svg" color='white' viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
            </div>
            })}
            
          </div>           
  )
}

export default Member