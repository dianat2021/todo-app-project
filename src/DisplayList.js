import React from "react";
import Todo from "./Components/Todo";

const DisplayList = (props) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {props.filteredTodos.map((item) => (
            <Todo
              text={item.text}
              key={item.id}
              todosList={props.todosList}
              setTodosList={props.setTodosList}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayList;
