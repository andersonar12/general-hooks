import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  return (
    <div>
      <h1>FocusScreen</h1>
      <input type="text" className="form-control" ref={inputRef} placeholder="Nombre" />
      <button className="mt-3 btn btn-outline-danger" onClick={() => inputRef.current.select()}>
        Focus
      </button>
    </div>
  );
};
