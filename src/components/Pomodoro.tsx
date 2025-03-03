import React, { useEffect, useState } from 'react'


const Pomodoro: React.FC = () => {
  return (
    <div className='pomodoro-container'>
      <PomodoroFunction isBreak={false} />
      <PomodoroFunction isBreak={true} />
    </div>
  )
}

interface PomodoroProps{
  isBreak: boolean;
}

const PomodoroFunction :React.FC<PomodoroProps> = ({isBreak}) => {
    const [time, setTime] = useState(isBreak ? 5*60 : 25*60);
    const [isRunning, setIsRunning] = useState(false);
    // const [isBreak, setIsBreak] = useState(false);

    //Runs whenever running changes
    //useEffect hook that depends on a varaible. Whenever is running updates, the effect runs
    useEffect(()=>{
        let timer: number;
        if (isRunning){
            timer = window.setInterval(()=>{
                setTime((prev:number) => (prev > 0 ? prev - 1 : 0))
            }, 1000)
            return () => clearInterval(timer);  //cleanup function.
        }
    }, [isRunning])

    useEffect(() => {
      if (time === 0) {
        setIsRunning(false);
      }
    }, [time]);

    const formatTime = (seconds: number) =>{
      const minutes = Math.floor(seconds/60);
      const sec = seconds % 60;
      return `${minutes}: ${sec < 10 ? "0" : ""}${sec}`;
    };



  return (
    <div className='pomodoro'>
      {/* <h1>POMODORO TIMER</h1> */}
        <h2>{isBreak ? "Break" : "Work"}</h2>
        <p>{formatTime(time)}</p>

        <div className="buttons">
            <button onClick = {()=>setIsRunning(!isRunning)}>{isRunning ? "Pause": "Start"}</button>
            <button
            onClick={ () => {
            setIsRunning(false);
            setTime(isBreak ? 5 * 60 : 25 * 60);
            }}>
              Reset  
            </button>
        </div>


    </div>
  )
}

export default Pomodoro