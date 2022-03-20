import './App.css';
import React from 'react'
import {useRef, useState, useEffect} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import G from './Firebase';
// import Map from './component/Map'; 
function App() {
  // const ref = useRef(null);
  // const [map, setMap] = useState();
  const [val, setVal] = useState('')
  let confirmationResult
  const value = (e) => {
    setVal(e.target.value)
  }
  const setUpRecap = () => {
    window.recaptchaVerifier = new G.auth.RecaptchaVerifier('ref-con', {
      'size': 'normal',
      'callback': (response) => {
      },
      'expired-callback': () => {
     }
  });

  }
  const onClick = (event) => {
    event.preventDefault()
    // this.setUpRecap()
    const phone = "+97699991000"
   G.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier).then((confirmationResult) => {
    window.confirmationResult = confirmationResult;
    console.log(phone);
}).catch((error) => {
    console.log(error);
});
}
  return (
    <div className='Container'>
      <h1>da</h1>
      <form onSubmit={onClick}>
        <div id="ref-con"></div>
        <div className='Dai'>
        <label>
          <input
            value={val}
            onChange={value}
            type='number'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
        </div>
        <button type='submit' onClick={onClick} >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
