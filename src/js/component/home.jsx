import React, { useEffect, useState } from "react";
import { modifyTodos, getTodos } from "../services/services";
import randomColor from "./randomColor";
import TodoList from "./TodoList";
import { makeRandomId } from "./randomID";
// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState("black");

  useEffect(() => {
    const llamarGetTodos = () => {
    getTodos().then((data) => setTodos(data));
    };
    llamarGetTodos();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      const objInputValue = {
        label: inputValue,
        id: makeRandomId(2),
        done: false,
      }
      setTodos([...todos, objInputValue]);
      modifyTodos([...todos, objInputValue]);
      setColor(randomColor());
      setInputValue("");
    }else alert("Campo vacio, pon algo!");
  };
  const handleDoneFalseOrTrue =(todo, e) => {
    e.preventDefault();
    const updatedTodos = todos.map((todoDone) => {
      if (todoDone.id === todo.id) {
        return {
          ...todoDone,
          done: !todoDone.done, 
        };
      }
      return todoDone;
    });
    modifyTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleDeleteTodo =(todoID, e) => {
    e.preventDefault();
    const newCleanTodos = todos.filter((todo) => todoID !== todo.id);
    modifyTodos(newCleanTodos);
    setTodos(newCleanTodos);
  };

  return (
    <>
      <TodoList 
      inputValue={inputValue}
      todos={todos}
      color={color}
      handleInputChange={handleInputChange}
      handleAddTodo={handleAddTodo}
      handleDoneFalseOrTrue={handleDoneFalseOrTrue}
      handleDeleteTodo={handleDeleteTodo}
      />
    </>
)};

export default Home;
