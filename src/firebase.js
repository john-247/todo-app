// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = ;
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUImTJZUifpbXsc84r7g3NavVMvPz8ixY",
  authDomain: "todo-app-28045.firebaseapp.com",
  projectId: "todo-app-28045",
  storageBucket: "todo-app-28045.appspot.com",
  messagingSenderId: "878431480645",
  appId: "1:878431480645:web:5c8e33a314848c93c36c2c",
  measurementId: "G-RCCE3P06QE",
});

const db = firebaseApp.firestore();

export default db;
