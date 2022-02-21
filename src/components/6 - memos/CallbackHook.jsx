import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement.jsx";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>CallbackHook</h1>
      <p>{counter}</p>
      <ShowIncrement increment={increment} />
    </div>
  );
};
