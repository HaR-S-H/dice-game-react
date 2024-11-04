import React from 'react'

export default function Home() {
  return (
    <div className='h-[100vh] w-full bg-white flex'>
          <div className='w-[50%]'>
              <img src="/images/dices 1.png" alt="dice image" />
      </div>
          <div className='w-[50%]'>
              <h1 className='uppercase'>Dice game</h1>
              <button className='bg-black rounded-sm text-white'>Play Now</button>
      </div>
    </div>
  )
}
