
export const initialState = {
  count: 0,
  step: 1,
};
type TState = {
  count: number;
  step: number;
};

export function reducer(state:TState, action:{type:string,payload?:number}):TState {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload  as number};
    case "setStep":
      return { ...state, step: action.payload  as number};
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
}
