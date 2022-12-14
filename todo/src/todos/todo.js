import {useState, useEffect} from 'react'
import {TodoForm} from './todoForm.js';
import { db } from '../firebase';
const Todo = ({toggleInProgress, todos, completeTodo, removeTodo, updateTodo }) => {
  
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
            <span onClick={() => toggleInProgress(todo.id, todo.todo)} className='done-icon'>done</span>
        </div>
      </div>
    ));
  };

export {
    Todo
} 
    