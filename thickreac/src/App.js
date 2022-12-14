import './App.css';
import { useState, useEffect } from 'react';
import Input from './component/Search';
import Render from './component/Render';
import Head from './component/Head';
// const Data = [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];
function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState(false)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  console.log(value);
  return (
    <div className='flex'>
      <Input onChange = {onChange} value={value} data={data} setData={setData}/>
    <div className="App">
      <Render data={data} value={value}/>
      <Head/>
    </div>

    </div>
  );
}

export default App;
