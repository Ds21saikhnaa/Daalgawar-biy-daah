import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAoTue1dMEG3-2BRYfVVSZmdztptEZzTn8",
    authDomain: "reactzenly.firebaseapp.com",
    projectId: "reactzenly",
    storageBucket: "reactzenly.appspot.com",
    messagingSenderId: "783302204725",
    appId: "1:783302204725:web:fc8ec7b41bdc0b2ce1007c"
};
// firebase.auth().languageCode = 'mn';
firebase.initializeApp(firebaseConfig);
export default firebase;