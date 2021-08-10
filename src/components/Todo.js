import React, { useState } from "react";
import firebase from "../util/firebase";
// import "../App.css";

export default function Todo({ todo }) {
  const textInput = React.useRef();
  // const setFocus = useState(false);

  const [newTitle, setNewTitle] = useState("");

  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  const editTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      title: newTitle,
      edited: !todo.edited,
    });   
    if (todo.edited === false)
      textInput.current.focus();
  };

  const handleChange = (e) => {
    //e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <li className="list-item">
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className={todo.complete ? "list complete" : "list"}
        onChange={handleChange}
        ref={textInput}
        // disabled = {todo.edited ? false : true}
      />

      <div>
        <button className={todo.edited ? "task-button disabled" : "button-complete task-button"} onClick={completeTodo}>
          <i className="fa fa-check-circle"></i>
        </button>
        <button className={todo.complete ? "task-button disabled" :"button-edit task-button"} onClick={editTodo}>
          <i className={todo.edited ? "fa fa-check" :"fa fa-edit"}></i>
        </button>
        <button className={todo.edited ? "task-button disabled" : "button-delete task-button"} onClick={deleteTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
