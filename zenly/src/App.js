import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import { Map } from './component/Map';
import { Login } from './component/login';

function App() {
  const [ user, setUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser({
                  uid: user.uid,
                  phoneNumber: user.phoneNumber,
                  email: user.email,
                  displayName: user.displayName,
              });
          } else {
              setUser(null);
          }
          setIsLoading(false);
      });
  }, []);

  if (isLoading) {
      return <h1>Loading...</h1>
  }

  if (!user) {
      return <Login />
  }

  return (
      <>
        <Map />
        
      </>
  )
}  
export default App;