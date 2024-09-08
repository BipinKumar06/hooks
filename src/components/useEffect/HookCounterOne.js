import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    useEffect(() => {
        console.log("updating document title")
        document.title = `clicked ${count} times`

        // cleanup function
        return () =>{
            document.title="React App"
        }
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>{setCount(count+1)}}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne