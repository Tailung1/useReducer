type TAction =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "updateStep"; payload: number }
  | { type: "reset" };
