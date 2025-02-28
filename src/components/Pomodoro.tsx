import React, { useEffect, useState } from 'react'

const Pomodoro:React.FC = () => {
    const [time, setTime] = useState(25*60);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    //Runs whenever running changes
    //useEffect hook that depends on a varaible. Whenever is running updates, the effect runs
    useEffect(()=>{
        let timer: NodeJS.Timeout;
        if (isRunning){
            timer = setInterval(()=>{
                setTime((prev) = (prev > 0 ? prev - 1 : 0))
            }, 1000)
            return () => clearInterval(timer);  //cleanup function.
        }
    }, [isRunning])



  return (
    <div className='pomodoro'>
        <h2>{isBreak ? "Break Time" : "Work Time"}</h2>
        <h1>{time}</h1>

        <div className="buttons">
            <button onClick = {()=>setIsRunning(!isRunning)}>{isRunning ? "Pause": "Start"}</button>
            <button
            onClick={ () => {
            setIsRunning(false);
            setTime(25*60);
            setIsBreak(false)
            }}>
              Reset  
            </button>
        </div>


    </div>
  )
}

export default Pomodoro