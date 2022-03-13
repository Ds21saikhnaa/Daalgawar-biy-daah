//import firebase from "firebase"
//import {firebase} from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyAzWJNY8tcAuCI1p_RmNDsdlRFUTNYt8RY",
    authDomain: "reacttodoapp-c9930.firebaseapp.com",
    projectId: "reacttodoapp-c9930",
    storageBucket: "reacttodoapp-c9930.appspot.com",
    messagingSenderId: "505997949869",
    appId: "1:505997949869:web:437e054f8b932cfbd8bf24"
  };
  // const db = getFirestore.firestore();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }
  export {
      db, app
  }  
//       <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>