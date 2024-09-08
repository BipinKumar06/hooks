import React, { useState } from 'react'
import UseCallBackfn from './otherHooks/UseCallBackfn'
import UseMemo from './otherHooks/UseMemo'
import FocusInputUsingUseRef from './otherHooks/FocusInputUsingUseRef'
import ClassTimer from './otherHooks/ClassTimer'
import ClassTimerUsingUseRef from './otherHooks/ClassTimerUsingUseRef'
import DocTitleOne from './customHooks/DocTitleOne'

function OtherHooks() {
    const [text,setText] = useState("Show other hooks")
    const [showHooks,setShowHooks] = useState(false)
    function handleClick() {
     setText(!showHooks?"Hide other hooks":"Show other hooks")
     setShowHooks(!showHooks)
    }
  return (
    <div>
        <button onClick={handleClick}>{text}</button>
        {showHooks && 
        <div>
            <UseCallBackfn/>
            <UseMemo/>
            <FocusInputUsingUseRef/>
            <ClassTimer/>
            <ClassTimerUsingUseRef/>
            <h5>Update Document Title using Custom Hook</h5>
            <DocTitleOne/>
            <DocTitleOne/>
        </div>}
    </div>
  )
}

export default OtherHooks