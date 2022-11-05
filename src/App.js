// import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useReducer } from "react";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

function reducerFunction (state, action) {
switch (action.type) {
  case 'increment' : 
  return { 
     count : state.count + 1}
  case 'decrement' :
    return {count: state.count - 1}
    case 'reset' :
    return {count: state.count = 0}
    case 'setValue' :
      return {
        count: state.count,
        setValue:  true
      }
      case 'submitBtn' :
        return { count: state.count,
        setValue: false}

    default : return state
}
}

function App() {
 const [state, dispatch] = useReducer( reducerFunction,  { 
  count: 0,
   setValue : false
} )
const [inputValue, setInputValue] = useState('');

const onChangeInputValue = (e) => {
  const { value } = e.target;

  setInputValue(value);
}
function increment(){
  dispatch({ type : 'increment'})
}
function decrement(){
  dispatch({ type : 'decrement'})
}
function reset(){
  dispatch({ type : 'reset'})
}
function setValue(){
  dispatch({ type : 'setValue'})
}

function handleSubmit(){
dispatch({type : 'submitBtn'});
state.count = parseInt(inputValue)
}

// console.log(inputValue)

  return (
    <>
    <div className="counter">
    <div className="counter--count">
        <h1>{state.count}</h1>
    </div>
    <div className="btn-container">
    <button className="counter--minus" onClick={decrement}>–</button>
    <button className="counter--plus" onClick={increment}>+</button>
    <button className="reset" onClick={reset}>Reset</button>
    <button className="setValue" onClick={setValue} >Set Value</button>
    </div>
</div>
{state.setValue && 
<div className="inputField">
<input type="number" placeholder="Enter Value here..." value={inputValue} onChange={onChangeInputValue}/>
<button className="submit-btn" onClick={handleSubmit}>Submit</button>
</div>
}
</>
  );
}

export default App;

