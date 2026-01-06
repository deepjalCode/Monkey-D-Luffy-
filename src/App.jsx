import React from 'react'
import Navbar from './components/Navbar'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection';

const App = () => {
  const onePieceCharacters = [
  {
    name: "Roronoa Zoro",
    url: "https://i.pinimg.com/736x/6e/b0/9e/6eb09eecb7ac69832c8e13732a2b701b.jpg",
    description: "The combatant of the Straw Hat Pirates and a master swordsman who uses the Three-Sword Style. Zoro’s goal is to become the world’s greatest swordsman, and he is known for extreme discipline, loyalty, and endurance."
  },
  {
    name: "Usopp",
    url: "https://i.pinimg.com/736x/81/a8/4c/81a84cb1d0300caba29bf65e20893d46.jpg",
    description: "The sniper of the Straw Hat Pirates. Initially a coward and compulsive liar, Usopp gradually develops courage and confidence, using his intelligence, marksmanship, and inventions to support the crew."
  }
];

  
  return (
    <div className='h-screen w-full bg-red-600'>
      <Navbar />
      <div className='flex w-full  justify-between h-[60%] '>
        <LeftSection onePieceCharacters={onePieceCharacters}/>
        <RightSection />
      </div>
      
    </div>
    
  )
}

export default App