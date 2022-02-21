import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (arg = 1) => {
    setCounter(counter + arg);
  };

  const decrement = (arg = 1) => {
    setCounter(counter - arg);
  };

  const reset = () => setCounter(initialState);

  return { counter, increment, decrement, reset };
};
