import React, { useState } from "react";
import { db } from "../firebase";
let edit = true;

function TodoForm({ updateTodo, id,  } ) {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  console.log(id);
  const handleSubmit = (e) => {
    let dateNow = new Date();
    e.preventDefault();
    if (id) {
      console.log("Added");
      db.collection("todos").add({
        inprogress: true,
        todo: input,
        createdAt: dateNow,
      });
    } else {
      console.log("updated -> ", id);
      db.collection("todos").doc(id).set(
        {
          inprogress: true,
          todo: input,
          updatedAt: dateNow,
        },
        {
          merge: true,
        }
      );
    }
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <button
            // onClick={() => updateTodo(id, input)}
            type="submit"
            className="todo-button edit"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
export { TodoForm };
