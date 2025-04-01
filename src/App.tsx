import { ChangeEvent, useReducer } from "react";
import DispachFunc from "./Reducer";

const initialState = { count: 0, step: 1 };




function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "updateStep":
      return { ...state, step: action.payload };
      case "defineCount":
        return {...state,count:action.payload}
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Something went Wrong");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  const date = new Date("2021-09-22");
  date.setDate(date.getDate() + count);

  function defineStep(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "updateStep", payload: Number(e.target.value) });
  }
  function dec() {
    dispatch({ type: "dec" });
  }
  //   function inc() {
  //     dispatch({ type: "inc" });
  //   }
  function defineCount(e:ChangeEvent<HTMLInputElement>) {
    dispatch({type:"defineCount",payload:Number(e.target.value)});
  }
  function reset() {
    dispatch({ type: "reset" });
  }
  return (
    <div style={{ marginLeft: "200px" }}>
      <input
        type='range'
        onChange={(e) => defineStep(e)}
        min={1}
        max={10}
      />{" "}
      {step}
      <div>
        <button onClick={dec}>-</button>
        <input type='text' value={count} onChange={defineCount} />
      </div>
      <button onClick={reset}>Reset</button>
      {date.toDateString()}
      <DispachFunc dispatch={dispatch} />
    </div>
  );
}
