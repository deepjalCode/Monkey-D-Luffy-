import React from 'react'
import Card from './Card'

const RightSection = () => {
  const strawHatPirates = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvORsXh-rvDplhdvqFnfQXQDi8PseUSi8Tg&s",
    occupation: "Occupation",
    description: "Captain of the Straw Hat Pirates whose goal is to become the Pirate King by achieving absolute freedom on the seas.Rubber Physiology,Haki Mastery, Extreme Willpower, Combat Adaptability, Leadership by Action, Moral Absolutism, Fearlessness Toward Authority."
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbD9co_KcaJv_mzEdZvkfAdBdAcCvYMElJg&s",
    occupation: "",
    description: "Rubber Physiology,Haki Mastery, Extreme Willpower, Combat Adaptability, Leadership by Action, Moral Absolutism, Fearlessness Toward Authority."
  }
];

  return (
    <div className=' w-[50%]  flex px-3 py-1'>
      <div className='w-[30%]  flex  flex-col '>
          <Card pirates={strawHatPirates} />
      </div>
      <div className='bg-white/30 backdrop-blur-xl border-2 text-white w-[70%] px-3 py-1 rounded-tl-2xl rounded-tr-4xl rounded ml-3'>
        <p className='font-semibold text-white'>
          Monkey D. Luffy is the main protagonist of One Piece and the determined captain of the Straw Hat Pirates. After eating the Gum-Gum Devil Fruit, his body gained rubber-like properties, which he combines with relentless creativity and raw willpower in battle. Luffy’s defining trait is not intelligence or strategy, but absolute conviction once he decides something, he does not retreat. His ultimate goal is to find the One Piece and become the Pirate King, not for power or status, but because it represents complete freedom.Monkey D. Luffy is the central figure of One Piece and the fearless captain of the Straw Hat Pirates. His rubber like abilities, gained from the Gum-Gum Devil Fruit, are secondary to his real strength: unbreakable willpower and absolute belief in his dreams. Luffy values freedom above all else and measures people not by status or power, but by loyalty and intent. 
        </p>
      </div>
     

    </div>
  )
}

export default RightSection