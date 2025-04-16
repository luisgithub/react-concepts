import React from "react";
import { useState } from "react";
export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="card">
        <button onClick={onClickHandler}>count is {count}</button>
      </div>
      <p className="read-the-docs">Click on button to increase the counter..</p>
    </>
  );
}
