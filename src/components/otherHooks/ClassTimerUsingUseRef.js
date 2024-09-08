import React, { useEffect, useRef, useState } from 'react'

function ClassTimerUsingUseRef() {
    const [timer,setTimer] = useState(0)
    const [toggleInterval,setToggleInterval] = useState("stopInterval")
    const interval = useRef(null)
    useEffect(()=>{
            if(toggleInterval === "startInterval"){
                clearInterval(interval.current)
                }
            else{
                interval.current = setInterval(()=>{
                    setTimer(prevTimer=>prevTimer+1)
                },1000)
                 }
    return () => {if(interval.current)clearInterval(interval.current)}
    },[toggleInterval])
    const handleClick = () => {
        setToggleInterval(prev => (prev === "stopInterval" ? "startInterval" : "stopInterval"));
    };

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={handleClick}>{toggleInterval}</button>
        </div>
    );
}

export default ClassTimerUsingUseRef