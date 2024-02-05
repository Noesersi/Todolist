import React from "react";

const TodoList = ({
  inputValue,
  todos,
  color,
  handleInputChange,
  handleAddTodo,
  handleDoneFalseOrTrue,
  handleDeleteTodo,
}) => {
  return (
    <div className="container col-12 col-md-6">
      <h1 style={{ color: color }}>My ToDo's</h1>
      <form action="">
        <ul>
          <li>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              required
              placeholder="What do you need to do baby??"
              onChange={(e) => handleInputChange(e)}
            />
            <div class="valid-feedback">Tarea añadida!</div>
            <div class="invalid-feedback">
              Por favor, elije un nombre de usuario.
            </div>
            <button className="icon-button" onClick={(e) => handleAddTodo(e)}>
              <i className="fa-solid fa-plus fa-shake"></i>
            </button>
          </li>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="id">ID:{todo.id}</div>
              <h5>{todo.label}</h5>
              <div>
                <button
                  className="icon-button"
                  onClick={(e) => handleDoneFalseOrTrue(todo, e)}
                >
                  {todo.done ? (
                    <i className="checkVerde fas fa-check"></i>
                  ) : (
                    <i className=" Xroja fas fa-times"></i>
                  )}
                </button>
                <button
                  className="icon-button fas fa-trash-alt delete-icon"
                  onClick={(e) => handleDeleteTodo(todo.id, e)}
                ></button>
              </div>
            </li>
          ))}
          <div style={{ color: color }}>{todos.length} tasks</div>
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
