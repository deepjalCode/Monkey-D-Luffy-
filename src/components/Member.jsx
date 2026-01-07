import React from 'react'

const Member = (props) => {

  
  return ( 
          <div className='flex items-center flex-col  mt-3  gap-2 px-2 py-1  '>
            {props.onePieceCharacters.map(function(elem,idx){

              return <div key={idx} className='flex items-center gap-3 mb-3 bg-pink-200 px-3 rounded-full'>
                <img 
                className='h-12 w-12 object-cover rounded-full outline-2 ' 
              src={elem.url} alt="" />
              <div>
                <h2 className='text-white font-bold '>{elem.name}</h2>
                <p className='  text-white text-sm font-light'>{elem.description} </p>
              </div>
              <svg 
              className=' flex h-fit p-4 w-20  bg-red-800 text-white  rounded-full '
              xmlns="http://www.w3.org/2000/svg" color='white'  viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
            </div>
            })}
            
          </div>           
  )
}

export default Member