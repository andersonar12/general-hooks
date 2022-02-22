export const TodoList = ({ todos, handleToggle, handleDelete, dispatch }) => {
  return (
    <ul className="list-group list-group-flush col-7">
      {todos.length > 0 &&
        todos.map((t, i) => (
          <li key={t.id} className="list-group-item">
            <p
              className={`${t.done && "text-decoration-line-through"}`}
              onClick={() => handleToggle(t.id, dispatch)}
            >
              {i + 1}. {t.desc}
            </p>
            <button className="btn btn-danger ms-3" onClick={() => handleDelete(t.id, dispatch)}>
              Borrar
            </button>
          </li>
        ))}
    </ul>
  );
};
