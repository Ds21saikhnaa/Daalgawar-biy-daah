import './App.css';
import React from 'react'
import {useRef, useState, useEffect} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import firebase, { auth } from './Firebase';
// import Map from './component/Map'; 
function App() {
  // const ref = useRef(null);
  // const [map, setMap] = useState();
  const [val, setVal] = useState('')
  let recaptchaVerifier
  const value = (e) => {
    setVal(e.target.value)
  }
  let setUpRecap = () => {
    recaptchaVerifier = new firebase.auth.RecaptchaVerifier('ref-con', {
      'size': 'invisible',
      'callback': (response) => {
        onClick();
        console.log('ver');
      },
    //   'expired-callback': () => {
    //  },
  });
  }
  const onClick = (event) => {
    event.preventDefault()
    setUpRecap()
    const phone = "+976" + val
   firebase.auth().signInWithPhoneNumber(phone, recaptchaVerifier).then((confirmationResult) => {
    window.confirmationResult = confirmationResult;
}).catch((error) => {
    console.log(error + "aldaa");
});
}
const subClick = (e) => {
  e.preventDefault()
  .confirmationResult.confirm('123456').then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(JSON.stringify(user))
    alert("User is verified")
    // ...
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
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
      <form onSubmit={subClick}>
        <div id="ref-con"></div>
        <div className='Dai'>
        <label>
          <input
            //value={val}
            //onChange={value}
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