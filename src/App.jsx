import React from 'react'
import Navbar from './components/Navbar'
import LeftSection from './components/LeftSection'

const App = () => {
  const onePieceCharacters = [
  {
    name: "Roronoa Zoro",
    url: "https://onepiece.fandom.com/wiki/Roronoa_Zoro",
    description: "The combatant of the Straw Hat Pirates and a master swordsman who uses the Three-Sword Style. Zoro’s goal is to become the world’s greatest swordsman, and he is known for extreme discipline, loyalty, and endurance."
  },
  {
    name: "Usopp",
    url: "https://onepiece.fandom.com/wiki/Usopp",
    description: "The sniper of the Straw Hat Pirates. Initially a coward and compulsive liar, Usopp gradually develops courage and confidence, using his intelligence, marksmanship, and inventions to support the crew."
  }
];

  
  return (
    <div className='h-screen w-full bg-red-600'>
      <Navbar />
      <div className='px-12'>
        <LeftSection onePieceCharacters={onePieceCharacters}/>
      </div>
      
    </div>
    
  )
}

export default App