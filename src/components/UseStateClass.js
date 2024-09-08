
import { useState } from 'react';
import Classcounter from './useState/Classcounter';
import HookCounterThree from './useState/HookCounterThree';
import HookWithArray from './useState/HookWithArray';
import HooksCounterTwo from './useState/HooksCounterTwo';
import Hookscounter from './useState/Hookscounter';
function UseStateClass() {
    const [obj,setObj] = useState({show:false,text:"show useState"})
const showAllUseState = () =>{
    setObj({
        ...obj,
        show: !obj.show,
        text: obj.show ? "show useState" : "hide useState"
    });
    }
  return (
    <div>
        <button onClick={showAllUseState}>{obj.text}</button>
      {obj.show && (<div><Classcounter/>
      <Hookscounter/>
      <HooksCounterTwo/>
      {/* UseState With Object */}
      <HookCounterThree/>
      {/* UseState With Array */}
      <HookWithArray/></div>)}
    </div>
  );
}

export default UseStateClass;
