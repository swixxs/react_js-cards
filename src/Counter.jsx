import { useState } from "react";
import { Button } from "./components/Button/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const setCounterHandler = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Button onClick={setCounterHandler}>count is {count}</Button>
    </div>
  );
};
