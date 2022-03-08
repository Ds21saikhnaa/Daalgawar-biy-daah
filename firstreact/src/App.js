import logo from './logo.svg';
import './App.css';
import { Click } from './cli.js'
import { Board } from './table.js'

function App() {
  return (
    <div className='Container'>
      <div className='One'>
        <h1 className='Row'>You clicked { <Click />} times</h1>
      </div>
      <div className='Two'>
        <Board></Board>
      </div>
    </div>
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
