import React, { ChangeEvent, useState } from "react";
import { Reducer } from "react";

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ marginLeft: "200px" }}>
      <input
        type='range'
        onChange={(e) => setStep(Number(e.target.value))}
        min={1}
        max={10}
      />{" "}
      {step}
      <div>
        <button onClick={() => setCount(count - step)}>
          Descrease
        </button>
        <input type='text' value={count} />
        <button onClick={() => setCount(count + step)}>
          Increase
        </button>
      </div>
    </div>
  );
}
