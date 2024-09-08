import React, { useState } from 'react'
import ClassCounterOne from './useEffect/ClassCounterOne'
import HookCounterOne from './useEffect/HookCounterOne'
import ClassMouse from './useEffect/ClassMouse'
import MouseContainer from './useEffect/MouseContainer'
import IntervalClassCounter from './useEffect/IntervalClassCounter'
import IntervalHookCounter from './useEffect/IntervalHookCounter'
import DataFetch from './useEffect/DataFetch'
import DataFetchingWithId from './useEffect/DataFetchingWithId'

function UseEffectClass() {
    const [obj,setObj] = useState({show:false,text:"show useEffect"})
    const handleShowuseEffect = () =>{
    setObj({...obj,
        show:obj.show?false:true,
        text:obj.show?"show useEffect":"hide useEffect"
    })
    }
  return (
    <div>
        <button onClick={handleShowuseEffect}>{obj.text}</button>
        {obj.show && (<div>
        hello
        {/* <ClassCounterOne/> */}
        {/* <HookCounterOne/> */}
        {/* <ClassMouse/> */}
         {/* <MouseContainer/> */}
         {/* <IntervalClassCounter/> */}
         {/* <IntervalHookCounter/> */}
         {/* <DataFetch/> */}
         <DataFetchingWithId/>
        </div>)}
    </div>
  )
}

export default UseEffectClass