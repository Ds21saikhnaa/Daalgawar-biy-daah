const firebaseConfig = {
    apiKey: "AIzaSyBLv1zAyoCEYYlNM4w1_EYSC2J_VxQ54tc",
    authDomain: "selfbook-53bbc.firebaseapp.com",
    projectId: "selfbook-53bbc",
    storageBucket: "selfbook-53bbc.appspot.com",
    messagingSenderId: "941501275561",
    appId: "1:941501275561:web:f7b11a5caf88305ee578b8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth().languageCode = 'mn';