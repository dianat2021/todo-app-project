import React, { useState, useEffect } from "react";
import "./App.css";
import TheInputForm from "./Components/TheInputForm";
import DisplayList from "./DisplayList";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getItems();
  }, []);
  //-------------------------------
  useEffect(() => {
    const filterHandler = () => {
      switch (filterStatus) {
        case "completed":
          setFilteredTodos(
            todosList.filter((item) => {
              return item.completed === true;
            })
          );
          break;
        case "incompleted":
          setFilteredTodos(
            todosList.filter((item) => {
              return item.completed === false;
            })
          );
          break;
        default:
          setFilteredTodos(todosList);
          break;
      }
    };
    filterHandler();
    saveItems();
  }, [todoText, filterStatus, todosList]);
  //---------------------------------------------------------

  const saveItems = () => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  };

  const getItems = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let savedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodosList(savedTodos);
    }
  };
  return (
    <div className="App">
      <header>YOUR TODO LIST</header>
      <TheInputForm
        setTodoText={setTodoText}
        todosList={todosList}
        setTodosList={setTodosList}
        todoText={todoText}
        setFilterStatus={setFilterStatus}
      />
      <DisplayList
        todosList={todosList}
        setTodosList={setTodosList}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
