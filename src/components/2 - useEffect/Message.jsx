import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      console.log(coords);
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      //Fase de limpieza
      //Se pueden hacer procedimientos como cancelar Suscripciones - parecido al ngOnDestroy de Angular

      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Coordenadas</h2>
      <p>
        x: {x}, y: {y}
      </p>
    </div>
  );
};
