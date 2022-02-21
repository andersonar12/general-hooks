import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter.js";

export const MemoHook = () => {
  const { counter, increment } = useCounter(30);
  const [show, setShow] = useState(true);

  const heavyProcess = (loops) => {
    for (let index = 0; index < loops; index++) {
      console.log("Loop", loops);
    }

    return `${loops} iteraciones realizadas`;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
  return (
    <>
      <h3>MemoHook</h3>
      <h5>
        Counter: <small>{counter}</small>
      </h5>
      <p>{memoHeavyProcess}</p>
      <button className="btn btn-warning" onClick={() => increment()}>
        Incrementar
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
