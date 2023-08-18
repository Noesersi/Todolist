import React, { useEffect, useState } from "react";
import { addTodos, getTodos } from "../services/services";
import randomColor from "./randomColor";
// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState("black");

  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleAddTodo = () => {
    // if (inputValue !== "") {
    //   setTodos([...todos, inputValue]);
    //   addTodos(todos);
    //   setColor(randomColor());
    //   setInputValue("");
    // }
  };
  const handleDeleteTodo = (index) => {
    const newCleanTodos = todos.filter((value, i) => i !== index);
    setTodos(newCleanTodos);
  };
  

  return (<>
    { todos && (<div className="container col-12 col-md-6">
      <h1 style={{ color: color }}>My ToDo's</h1>
      <ul>
        <li>
          <input
            type="text"
            value={inputValue}
            placeholder="What do you need to do baby??"
            onChange={(e) => handleInputChange(e)}
          />
          <i
            className="fa-solid fa-check icon"
            onClick={() => handleAddTodo()}
          ></i>
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo.label}</p>

            <p>Se ha hecho la tarea?: {todo.done}</p>
            <div>{todo.id}</div>
            <i
              className="fas fa-trash-alt delete-icon"
              onClick={() => handleDeleteTodo(index)}
            ></i>
          </li>
        ))}
        <div style={{ color: color }}>{todos.length} tasks</div>
      </ul>
    </div>)}
  </>
  );
};

export default Home;
