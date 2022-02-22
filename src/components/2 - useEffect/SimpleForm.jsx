import { useEffect, useState } from "react";
import { Message } from "./Message.jsx";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  //useEffect se usa  en ocasiones como el ngOnInit de Angular ya que se ejecuta cuando se monta el componente
  useEffect(() => {
    console.log("cleaned up");
    // en la funcion del return se podria usar para unsuscribe's o limpiar localStorage- similar al ngOnDestoy de Angular
    return () => {
      console.log("cleaned up");
    };
  }, []); //se dispara un sola vez este useEffect por que tiene 0 dependecias en el "[]"

  // useEffect(() => {}, [formState]);
  // useEffect(() => {}, [email]);
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
