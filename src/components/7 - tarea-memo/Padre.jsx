import React, { useCallback } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  /* const incrementar = (num) => {
    setValor(valor + num);
  }; */

  //Respuesta
  const incrementar = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );

  return (
    <div className="mb-4">
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
