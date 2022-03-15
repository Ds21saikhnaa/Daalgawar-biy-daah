import { useEffect, useState } from "react";
import { TodoForm } from "./todoForm.js";
import { Todo } from "./todo";
import { db } from "../firebase";
let edit = true;
function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const listenData = (snapshot) => {
      console.log("das");
      const myDocs = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          createdAt: doc.createdAt,
          ...doc.data(),
        };
      });
      setTodos(myDocs);
    };
    return db
      .collection("todos")
      .orderBy("createdAt", "desc")
      .onSnapshot(listenData);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (id, newValue) => {
      console.log(id);
      db.collection("todos").doc(id).update({
            todo: newValue.text
      });
      edit = true;
    
  };

  const removeTodo = (id) => {
    db.collection("todos").doc(id).delete();
  };

  const toggleInProgress = (id, inprogress) => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
    console.log(id);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <TodoForm onSubmit={addTodo} updateTodo={updateTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        id={todos.id}
        toggleInProgress={toggleInProgress}
      />
    </>
  );
}

export { TodoList };
