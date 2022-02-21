import { useEffect, useState } from "react";
import { Message } from "./Message.jsx";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {}, []);
  useEffect(() => {}, [formState]);
  useEffect(() => {}, [email]);
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div className="text-center">
      <h3>Simple Form</h3>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
    </div>
  );
};
