import "./App.css";
import { ChangeEvent, useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
      default:
        throw new Error("Invalid action type")
  } 
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date("2021-09-01");
  date.setDate(date.getDate() + count);

  function defineStep(event: ChangeEvent<HTMLInputElement>) {
    // setStep(Number(event.target.value));
    dispatch({
      type: "setStep",
      payload: Number(event.target.value),
    });
  }

  function defineCount(event: ChangeEvent<HTMLInputElement>) {
    // setCount(Number(event.target.value));
    dispatch({
      type: "setCount",
      payload: Number(event.target.value),
    });
  }

  function inc() {
    dispatch({ type: "inck" });
  }

  function dec() {
    dispatch({ type: "dec" });
  }

  function reset() {
    // setCount(0);
    // setStep(0);
    dispatch({ type: "reset" });
    // setStep(1);
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
