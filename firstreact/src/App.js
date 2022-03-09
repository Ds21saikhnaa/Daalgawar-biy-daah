import logo from './logo.svg';
import React, {useState} from "react"
import './App.css';
import { Click } from './cli.js'
import { Board } from './table.js'
import { Battle } from './battle.js'

function App() {
  const [count, setCount] = useState(50)
  const [countRed, setCountRed] = useState(50)
  const divClick = () => {
    setCount(count + 1);
}
const divClicked = () => {
  setCountRed(countRed + 1);
}
  return (
    <div className='Container'>
      <div className='Nav'>
        <h1>red<span>{ count }</span>:<span>{ countRed }</span>blue</h1>
      </div>
      <div className='Mini'>
        <div className='Left' onClick={ divClick } style={{ width: `${ count }%` }}></div>
        <div className='Right' onClick={ divClicked } style={{ width: `${ countRed }%` }}></div>
      </div>
    </div>


//   <div className='One'>
//     <h1 className='Row'>You clicked { <Click />} times</h1>
//   </div>
//   <div className='Two'>
//     <Board></Board>
//   </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
