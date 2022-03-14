import {useState, useEffect} from 'react'
import {TodoForm} from './todoForm.js';
import { db } from '../firebase';
const Todo = ({sd,id, inprogress,todos, completeTodo, removeTodo, updateTodo }) => {
  // const toggleInProgress = () => {
  //   db.collection("todos").doc(id).update({
  //     inprogress: !inprogress,
  //   });
  // }
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        edit: false,
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.todo}
        </div>
        <div className='Icons'>
            <span onClick={() => removeTodo(todo.id)} className='delete-icon'>x</span>
            <span>                                                                 </span>
            <span onClick={() => setEdit({ id: todo.id, value: todo.todo })} className='edit-icon'>edit</span>
            <span>                                                                 </span>
            <span onClick={sd} className='done-icon'>done</span>
        </div>
      </div>
    ));
  };

export {
    Todo
} 
    