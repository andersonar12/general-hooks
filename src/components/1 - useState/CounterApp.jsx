import { useState } from "react";

const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2 } = state;

  return (
    <div>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        + 1
      </button>
    </div>
  );
};

export default CounterApp;
