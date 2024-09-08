import React, { useState, useCallback } from 'react';
import Button from './Button';

function UseCallBackfn() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // Corrected useCallback
    const incrementAge = useCallback(() => {
        console.log("calling age function");
        setAge(prevAge => prevAge + 1);
    }, []); // Empty dependencies array as it only relies on `setAge`

    const incrementSalary = useCallback(() => {
        console.log("calling salary function");
        setSalary(prevSalary => prevSalary + 1000);
    }, []); // Empty dependencies array as it only relies on `setSalary`

    return (
        <div>
          <h5>useCallBack Function</h5>
            <h1>Age - {age}</h1>
            <Button handleClick={incrementAge} text="Age Increment"/>
            <h2>Salary - {salary}</h2>
            <Button handleClick={incrementSalary} text="Salary Increment"/>
        </div>
    );
}

export default UseCallBackfn;
