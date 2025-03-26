import React, {useState, useEffect } from 'react'

function Logger() {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log('Component render and count changed:',count)
    })
    //runs on every render cycle
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Logger