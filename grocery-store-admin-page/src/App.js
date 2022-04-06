import './App.css';
import { Add } from "./pages"
import { useState } from 'react'
function App() {
  const [cat, setCat] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [des, setDes] = useState('')
  const [id, setId] = useState(0); 
  const [flag, setFlag] = useState(false);
  return (
    <div className='container'>
        <Add setCat={setCat} setName={setName} setId={setId} setPrice={setPrice} setImage={setImage} setDes={setDes} flag={flag} setFlag={setFlag}/>
      <div className="App">
        <h1>Grocery Store Admin Panel</h1>
        <p>{cat}</p>
        <p>{name}</p>
        <p>{price}</p>
        <img src={image} height="300px" width="300px"></img>
        <p>{des}</p>
        <p>{id}</p>
      </div>
    </div>
  );
}

export default App;
