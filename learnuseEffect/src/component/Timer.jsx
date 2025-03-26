import React, {useState, useEffect } from 'react'
 
function Timer() {
    const [seconds, setSeconds]=useState(0)

    useEffect(()=>{ //First=> Side-effect function
        const intervalId = setInterval(()=>{
            setSeconds(prevSec => prevSec + 1)
        },1000);

        //Second=> cleanup function
        return () => clearInterval(intervalId);
    },
    []) //third=> dependency array
  return (
    <div>Seconds: {seconds}</div>
  )
}
 

export default Timer