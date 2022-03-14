import {useState, useEffect} from 'react'
import {TodoForm} from './todoForm.js';
import {Todo} from './todo';
import { db } from '../firebase';

function TodoList() {
    //const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState([])
    useEffect(() => {
      const listenData = (snapshot) => {
        console.log('das');
        const myDocs = snapshot.docs.map((doc) => {
          return{
            id: doc.id,
            createdAt: doc.createdAt,
            ...doc.data()
          }
        })
        setTodos(myDocs)
      }
      return db.collection('todos').orderBy("createdAt", "desc").onSnapshot(listenData)
    },[])
    const addTodo = todo => {
      if (!todo.todo || /^\s*$/.test(todo.todo)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
      console.log(...todos);
    };
  
    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
  
    const removeTodo = id => {
      db.collection("todos").doc(id).delete();
    };
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isColete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    return (
      <>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </>
    );
  }
  
export{
    TodoList
} 