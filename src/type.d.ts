type TState = {
  count: number;
  step: number;
};

type TAction =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "updateStep"; payload: number }
  | { type: "defineCount"; payload: number }
  | { type: "reset" };
