import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("=(");

  return (
    <button className="btn btn-dark" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});
