import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter.js";
import { useFetch } from "../../hooks/useFetch.js";
import "../5 - useLayoutEffect/layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div className="text-center">
      <h3>LayoutEffect</h3>

      <blockquote className="blockquote text-end">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-dark" onClick={() => increment()}>
        Siguiente Quote
      </button>
    </div>
  );
};
