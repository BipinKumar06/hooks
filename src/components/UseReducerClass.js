
import { useState } from 'react';
import CounterOne from './useReducer/CounterOne';
import CounterTwo from './useReducer/CounterTwo';
import Counter3 from './useReducer/Counter3';
import AppContain from './useReducer/useContextWithuseReducer/AppContain';
import DataFetchingOne from './useReducer/DataFetchingOne';
import DataFetchingTwo from './useReducer/DataFetchingTwo';

function UseReducerClass() {
    const [obj,setObj] = useState({show:false,text:"show useReducer"})
    const showAllUseReducer = () =>{
        setObj({
            ...obj,
            show: !obj.show,
            text: obj.show ? "show useReducer" : "hide useReducer"
        });
    }
  return (
    <div>
        <button onClick={showAllUseReducer}>{obj.text}</button>
      {obj.show && (<div>
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <Counter3/> */}
        {/* <AppContain/> */}
        {/* <DataFetchingOne/> */}
        <DataFetchingTwo/>
      </div>)}
    </div>
  );
}

export default UseReducerClass;
