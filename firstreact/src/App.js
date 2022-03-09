import logo from './logo.svg';
import React, {useState} from "react"
import './App.css';
import { Click } from './cli.js'
import { Board } from './table.js'
import { Battle } from './battle.js'
import { TodoForm } from './todos/todoForm'
import { TodoList } from './todos/todoList'
function App() {
  return (
    <div className='Container'>
      <div className='Nav'>
        <h1>Todo app</h1>
      </div>
      <div className='Mini'>
        < TodoList />
        </div>
    </div>
  );
}

export default App;
