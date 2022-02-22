export const todoReducer = (state = [], action) => {
  const actions = {
    add: state.concat(action.payload),
    delete: state.filter((todo) => todo.id !== action.payload),
    toggle: state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  };

  state = actions[action.type] ?? state;

  return state;
};
