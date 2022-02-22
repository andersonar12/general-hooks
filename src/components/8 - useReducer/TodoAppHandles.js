const handleSubmit = (e, description, dispatch, reset) => {
  e.preventDefault();

  if (description.trim().length <= 1) return;

  const newTodo = {
    id: new Date().getTime(),
    desc: description,
    done: false,
  };

  dispatch({ type: "add", payload: newTodo });
  reset();
};

const handleDelete = (todoId, dispatch) => dispatch({ type: "delete", payload: todoId });

const handleToggle = (todoId, dispatch) => dispatch({ type: "toggle", payload: todoId });

export { handleSubmit, handleDelete, handleToggle };
