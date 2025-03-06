import "./App.css";
import { useState, ChangeEvent,useReducer } from "react";

function reducer(state,action) {
    if(action.type==="inc") {
        return state+1
    }
   if (action.type === "dec") {
     return state - 1;
   }
}

function App() {
    const initialState=0;
  const [count,dispatch] = useReducer(reducer,initialState);

//   const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("2021-09-01");
  date.setDate(date.getDate() + count);

  function defineStep(event: ChangeEvent<HTMLInputElement>) {
    setStep(Number(event.target.value));
  }

  function defineCount(event: ChangeEvent<HTMLInputElement>) {
    // setCount(Number(event.target.value));
  }

  function inc() {
    dispatch({type:"inc"})
  }

  function dec() {
    dispatch({type:"dec"})
  }

  function reset() {
    // setCount(0);
    setStep(0);
  }

  return (
    <>
      <div>
        <input type='range' onChange={defineStep} min={1} max={10} />
        {step}
        <div>
          <button onClick={dec}>-</button>
          <input
            type='number'
            value={count}
            onChange={defineCount}
            min={1}
            max={10}
          />
          <button onClick={inc}>+</button>
        </div>
        {date.toString()}
        <div>
          {" "}
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
