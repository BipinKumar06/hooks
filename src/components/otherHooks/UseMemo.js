import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)
    const isEven = useMemo(()=>{
        console.log("calling even checker function")
        for(let i=0;i<20000000;){
            i++;
        }
       return counter1%2===0;
    },[counter1])
  return (
    <div>
        <h5>useMemo function</h5>
     <button onClick={()=>{setCounter1(counter1+1)}}>Counter1 - {counter1}</button>
     {isEven && (<div>Counter1 is even</div>)}
     {!isEven && (<div>Counter1 is odd</div>)}
     <button onClick={()=>{setCounter2(counter2+1)}}>Counter1 - {counter2}</button>
    </div>
  )
}

export default UseMemo