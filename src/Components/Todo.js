import React from "react";

const Todo = (props) => {
  const deleteTodoHandler = () => {
    props.setTodosList(
      props.todosList.filter((element) => element.id !== props.item.id)
    );
  };
  const completedHandler = () => {
    props.setTodosList(
      props.todosList.map((element) => {
        if (element.id === props.item.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };
  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${props.item.completed ? "completed" : ""}`}>
          {props.text}
        </li>
        <button className="complete-btn" onClick={completedHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteTodoHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
