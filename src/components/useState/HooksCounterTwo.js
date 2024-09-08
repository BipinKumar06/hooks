import React, { useState } from 'react'

function HooksCounterTwo() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount)
function incrementFive(){
    setCount(prevCount => prevCount + 5);
}
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HooksCounterTwo