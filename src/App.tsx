import "./App.css";
import { ChangeEvent, useReducer } from "react";

import { reducer, initialState } from "./Reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date("2021-09-01");
  date.setDate(date.getDate() + count);

  function defineStep(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "setStep",
      payload: Number(event.target.value),
    });
  }

  function defineCount(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "setCount",
      payload: Number(event.target.value),
    });
  }

  function inc() {
    dispatch({ type: "inc" });
  }

  function dec() {
    dispatch({ type: "dec" });
  }

  function reset() {
    dispatch({ type: "reset" });
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
