import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAzWJNY8tcAuCI1p_RmNDsdlRFUTNYt8RY",
  authDomain: "reacttodoapp-c9930.firebaseapp.com",
  projectId: "reacttodoapp-c9930",
  storageBucket: "reacttodoapp-c9930.appspot.com",
  messagingSenderId: "505997949869",
  appId: "1:505997949869:web:437e054f8b932cfbd8bf24"
};
firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {
      db
  }