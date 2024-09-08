import React, { useEffect, useRef } from 'react'

function FocusInputUsingUseRef() {
    const inputRef = useRef(null)
    useEffect(()=>{
    inputRef.current.focus()
    },[])
  return (
    <div>
        <h5>useRef function</h5>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInputUsingUseRef