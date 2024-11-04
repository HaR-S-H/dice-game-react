import React, { useState } from 'react'

export default function Game() {
    const [score, setScore] = useState(0);
    const [digit, setDigit] = useState(null);
    const [image, setImage] = useState("/images/dice_1.png");
    const [rules,setRules]=useState(false);
    const[error,setError]=useState(false);
    const [bgColor,setBgColor]=useState(null);
    const getDigit = () => {
        if (digit==null) {
            setError(true);
            return;
        }
        const randDigit = Math.floor(Math.random() * 6 + 1);
        setImage(`/images/dice_${randDigit}.png`);
        if (randDigit === digit) {
            setScore(score + randDigit);
        }
        else {
            setScore(score - randDigit);
        }
        setDigit(null);

    }
    const resetScore = () => { 
        setScore(0);
        setDigit(null);
        setImage("/images/dice_1.png");
        setError(false);
        setBgColor(null);
        setRules(false)
    }
    const handleClickButton = (num) => {
        setDigit(num);
        setError(null);
    }
  return (
    <div className='w-full h-screen'>
          <div className='flex w-full justify-between px-20 pt-10'>
              <div className=''>
                  <div className='font-semibold text-4xl'>
                      {score}
                      </div>
                  <p className='font-bold'>Total Score</p>
              </div>
              <div className=''>
                  {error && <p className='text-end text-red-500'>Please select a number</p>}
                  <div className='gap-5 flex'>
                      <button className={`border border-black  h-10 w-10 font-bold text-sm ${digit===1?"bg-black text-white":""}`} onClick={()=>handleClickButton(1)}>1</button>
                  <button className={`border border-black  h-10 w-10 font-bold text-sm ${digit===2?"bg-black text-white":""}`} onClick={()=>handleClickButton(2)}>2</button>
                  <button className={`border border-black  h-10 w-10 font-bold text-sm ${digit===3?"bg-black text-white":""}`} onClick={()=>handleClickButton(3)}>3</button>
                  <button className={`border border-black  h-10 w-10 font-bold text-sm ${digit===4?"bg-black text-white":""}`} onClick={()=>handleClickButton(4)}>4</button>
                  <button className={`border border-black  h-10 w-10 font-bold text-sm ${digit===5?"bg-black text-white":""}`} onClick={()=>handleClickButton(5)}>5</button>
                      <button className={`border border-black  h-10 w-10 font-bold text-sm ${digit===6?"bg-black text-white":""}`} onClick={() => setDigit(6)}>6</button>
                  </div>
                  <p className='text-end mt-2 font-bold'>Select Number</p>
              </div>
          </div>
          <div className='flex flex-col'>
              <img className="w-[150px] h-[150px] mx-auto"src={image} alt="diceImage" srcset="" onClick={getDigit} />
              <p className='text-center font-semibold'>Click on Dice to roll</p>
              <div className='mx-auto flex flex-col'>
              <button className='bg-white rounded-sm px-16 text-black border border-black mt-5 py-1' onClick={resetScore}>Reset Score</button>
                  <button className='bg-black rounded-sm px-10 text-white mt-5 py-1' onClick={()=>setRules(!rules)}>Show Rules</button>
                  </div>
          </div>
          <div>
          {rules && <div className='bg-red-200 px-10 py-1 space-y-2 w-[60%] mx-auto mt-5 text-sm'>
              <h2 className='font-bold'>How to play dice game</h2>
              <p>select any number</p>
              <p>click on dice image</p>
              <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
              <p>if you get wrong guess then  2 point will be dedcuted </p>
              </div>}
              </div>
    </div>
  )
}
