import { useCounter } from "../../hooks/useCounter.js";

export const CustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(15);

  return (
    <div>
      <h1>Counter {state}</h1>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        Aumentar
      </button>
      <button className="btn btn-outline-primary" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        Decrementar
      </button>
    </div>
  );
};
