import { useCounter } from "../../hooks/useCounter.js";
import { useFetch } from "../../hooks/useFetch.js";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //Si existe la data "!!data" entonces extrea la posicion 0 de la data
  const { author, quote } = !!data && data[0];

  return (
    <div className="text-center">
      <h3>Breaking Bad</h3>
      {loading ? (
        <div className="mb-3">
          <div className="spinner-border text-primary "></div>
        </div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-dark" onClick={() => increment()}>
        Siguiente Quote
      </button>
    </div>
  );
};
