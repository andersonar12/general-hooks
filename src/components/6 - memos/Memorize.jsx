import { useState } from "react";
import { useCounter } from "../../hooks/useCounter.js";
import { Small } from "./Small.jsx";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h3>Memorize</h3>
      <h5>
        Counter: <Small value={counter} />
      </h5>

      <button className="btn btn-warning" onClick={() => increment()}>
        Incrementar
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
