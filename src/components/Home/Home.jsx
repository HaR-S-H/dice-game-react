import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/game');
    }
    return (
        <>
    <div className='h-[100vh] w-full bg-white flex items-center'>
          <div className='w-[50%]'>
              <img src="/images/dices 1.png" alt="dice image" />
      </div>
          <div className='w-[50%] flex flex-col'>
              <h1 className='uppercase text-7xl font-bold'>Dice game</h1>
              <span className='ml-60'><button onClick={handleNavigate} className='bg-black rounded-sm px-10 text-white mt-5 py-1'>Play Now</button></span>
      </div>
            </div>
            </>
  )
}