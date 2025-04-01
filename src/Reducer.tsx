export function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "updateStep":
      return { ...state, step: action.payload };
    case "defineCount":
      return { ...state, count: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Something went Wrong");
  }
}
