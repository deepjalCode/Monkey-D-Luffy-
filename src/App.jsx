import React from 'react'
import Navbar from './components/Navbar'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection';

const App = () => {
  const onePieceCharacters = [
  {
    name: "Roronoa Zoro",
    url: "https://i.pinimg.com/736x/6e/b0/9e/6eb09eecb7ac69832c8e13732a2b701b.jpg",
    description: "The combatant of the Straw Hat Pirates and a master swordsman who uses the Three-Sword Style. Zoro’s goal is to become the world’s greatest swordsman."
  },
  {
    name: "Usopp",
    url: "https://i.pinimg.com/736x/81/a8/4c/81a84cb1d0300caba29bf65e20893d46.jpg",
    description: "The sniper of the Straw Hat Pirates. Initially a coward and compulsive liar, Usopp gradually develops courage and confidence."
  }
];

  
  return (
    <div className='h-screen w-full bg-[#81171b]'>
      <Navbar />
      <div className='flex w-full  justify-between h-[60%] '>
        <LeftSection onePieceCharacters={onePieceCharacters}/>
        <RightSection />
      </div>
      <div className='absolute top-[50%]  left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <img className='bg-transparent h-[60%]' src="https://w7.pngwing.com/pngs/149/378/png-transparent-one-piece-monkey-d-luffy-one-piece-burning-blood-monkey-d-luffy-roronoa-zoro-nami-portgas-d-ace-luffy-piracy-fictional-character-cartoon-thumbnail.png" alt="" />
      </div>
     
      
    </div>
    
  )
}

export default App