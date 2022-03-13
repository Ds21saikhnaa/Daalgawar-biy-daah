import logo from './logo.svg';
import './App.css';import { Battle } from './battle.js'

import React, {useState} from "react"

function App() {
  const [state, setCount] = useState({
    count: 50,
    countRed: 50
  })
  let { count, countRed } = state;
  const divClick = () => {
    setCount({...state, count : count + 1});
}
const divClicked = () => {
  setCount({...state, countRed : countRed + 1});
}
  return (
    <div className='Container'>
      <div className='Nav'>
        <h1>red<span>{ count }</span>:<span>{ countRed }</span>blue</h1>
      </div>
      <div className='Mini'>
        <div className='Left' onClick={ divClick } style={{ width: `${ (count * 100)/(count + countRed) }%` }}></div>
        <div className='Right' onClick={ divClicked } style={{ width: `${ (countRed * 100)/(count + countRed) }%` }}></div>
      </div>
    </div>
  );
}

export default App;
