import { useState } from "react";
import { MultipleCustomHooks } from "../3 - examples/MultipleCustomHooks.jsx";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      {show && <MultipleCustomHooks />}
      <button className="btn btn-outline-primary mt-5" onClick={() => setShow(!show)}>
        Show / Hide
      </button>
    </div>
  );
};
