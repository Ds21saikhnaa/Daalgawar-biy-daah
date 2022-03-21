import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAoTue1dMEG3-2BRYfVVSZmdztptEZzTn8",
    authDomain: "reactzenly.firebaseapp.com",
    projectId: "reactzenly",
    storageBucket: "reactzenly.appspot.com",
    messagingSenderId: "783302204725",
    appId: "1:783302204725:web:fc8ec7b41bdc0b2ce1007c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);