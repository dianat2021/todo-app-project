import React from "react";

const TheInputForm = (props) => {
  const todoTextHandler = (event) => {
    props.setTodoText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.setTodosList([
      ...props.todosList,
      { text: props.todoText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setTodoText("");
  };

  const fileteredStatusHandler = (event) => {
    props.setFilterStatus(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          value={props.todoText}
          onChange={todoTextHandler}
        />
        <button className="todo-button" type="submit" onClick={submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={fileteredStatusHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default TheInputForm;
