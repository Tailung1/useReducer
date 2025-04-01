import React from "react";

export default function DispatchFunc({
  dispatch,
}: {
  dispatch: React.Dispatch<TAction>;
}) {
  function inc() {
    dispatch({ type: "inc" });
  }

  return <button onClick={inc}>+</button>;
}
