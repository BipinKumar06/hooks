import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 0
}
const reducer = (state, action) => {
 switch(action.type){
    case 'increment':
        return {...state,firstCounter:state.firstCounter+1};
    case 'incrementBy2':
        return {...state,secondCounter:state.secondCounter+2};
    case 'incrementBy5':
        return {...state,firstCounter:state.firstCounter+5};
    case 'decrement':
        return {...state,firstCounter:state.firstCounter-1};
    case 'decrementBy2':
        return {...state,secondCounter:state.secondCounter-2};
    case 'decrementBy5':
        return {...state,firstCounter:state.firstCounter-5};
    case 'reset':
        return initialState;
    default:
        return state;
 }
}
function CounterTwo() {
    const [count,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Counter1 : {count.firstCounter} , Counter2 : {count.secondCounter}</div>
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type:'incrementBy2'})}>Increment 2</button>
        <button onClick={() => dispatch({type:'incrementBy5'})}>Increment 5</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'decrementBy2'})}>Decrement 2</button>
        <button onClick={() => dispatch({type:'decrementBy5'})}>Decrement 5</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo