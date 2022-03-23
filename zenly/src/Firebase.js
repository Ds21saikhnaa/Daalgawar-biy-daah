import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAoTue1dMEG3-2BRYfVVSZmdztptEZzTn8",
  authDomain: "reactzenly.firebaseapp.com",
  projectId: "reactzenly",
  storageBucket: "reactzenly.appspot.com",
  messagingSenderId: "783302204725",
  appId: "1:783302204725:web:fc8ec7b41bdc0b2ce1007c",
});

// const firebaseConfig = initializeApp({
//   apiKey: "AIzaSyAzWJNY8tcAuCI1p_RmNDsdlRFUTNYt8RY",
//   authDomain: "reacttodoapp-c9930.firebaseapp.com",
//   projectId: "reacttodoapp-c9930",
//   storageBucket: "reacttodoapp-c9930.appspot.com",
//   messagingSenderId: "505997949869",
//   appId: "1:505997949869:web:437e054f8b932cfbd8bf24"
// })
const auth = getAuth(firebaseConfig);
const db = getFirestore();
// const out = signOut(auth)
export { auth, db };
