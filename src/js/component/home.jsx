import React, { useState } from "react";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState("black")

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setColor(randomColor());
      alert('Has añadido una nueva tarea ', )
      setInputValue("");
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((value,i) => i !== index);
    alert('acabas de borrar una tarea!! ten cuidado no vayas a dejarte algo por hacer!!!')
    setTodos(newTodos);
  };
  function randomColor(){
    const colors = [ 'green', 'blue', 'yellow', 'red', 'purple', 'cian', 'grey','orange']
    const randomColor = Math.floor(Math.random()*colors.length);
    return colors[randomColor];
  }

  return (
    <div className="container col-12 col-md-6">
      <h1 style={{color: color}}>My ToDo's</h1>
      <ul>
        <li>
          <input
            type="text"
            value={inputValue}
            placeholder="What do you need to do baby??"
            onChange={handleInputChange}
          />
          <i className="fa-solid fa-check icon" onClick={handleAddTodo}></i>
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <i
              className="fas fa-trash-alt delete-icon"
              onClick={() => handleDeleteTodo(index)}
            ></i>
          </li>
        ))}
        <div style={{color: color}}>{todos.length} tasks</div>
      </ul>
    </div>
  );
};

export default Home;
