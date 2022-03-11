import logo from './logo.svg';
import './App.css';
import { Click } from './cli.js'
import { Board } from './table.js'
import { Battle } from './battle.js'
import { TodoForm } from './todos/todoForm'
import { TodoList } from './todos/todoList'
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
// function App() {
//   return (
//     <div className='Container'>
//       <div className='Nav'>
//         <h1>Todo app</h1>
//       </div>
//       <div className='Mini'>
//         < TodoList />
//         </div>
//     </div>
//    );
// }

export default App;
