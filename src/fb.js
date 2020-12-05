import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBH5s0qt--KqG9rUwg1aR1fV6xC7X1syV0",
    authDomain: "todo-ninja-dbb5d.firebaseapp.com",
    projectId: "todo-ninja-dbb5d",
    storageBucket: "todo-ninja-dbb5d.appspot.com",
    messagingSenderId: "1060747686672",
    appId: "1:1060747686672:web:c0ca2d0427e77e38e72b95",
    measurementId: "G-FPEDWLZ6Q3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots : true});
  export default db;