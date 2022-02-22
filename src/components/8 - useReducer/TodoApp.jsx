import { useEffect, useReducer } from "react";
//Hooks
import { useForm } from "../../hooks/useForm.js";
import { todoReducer } from "./todoReducer.js";
//Functions
import { handleDelete, handleToggle, handleSubmit } from "./TodoAppHandles.js";
//Components
import { TodoList } from "./components/TodoList.jsx";

const init = () => JSON.parse(localStorage.getItem("todos")) ?? [];

export const TodoApp = () => {
  //EL useReducer se parece al useState en cuanto a reactividad y se diferencia del mismo, ya que se usa y se recomienda cuando hay logicas mas complejas
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({ description: "" });

  //Este useEfect se disparara cuando los "todos" cambien
  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

  return (
    <div className="row">
      <h1>TodoApp ({todos.length})</h1>
      <div className="col-5">
        <form
          className="input-group mb-3"
          onSubmit={(e) => handleSubmit(e, description, dispatch, reset)}
        >
          <input
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={handleInputChange}
          />
          <button className="btn btn-secondary" type="submit" id="button-addon">
            Agregar
          </button>
        </form>
      </div>
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        dispatch={dispatch}
      />
    </div>
  );
};
