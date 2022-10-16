// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, push, child, ref, update, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD320zPo3__kM3jIKO9I09rcODm_zyQh54",
  authDomain: "sharespace-103b5.firebaseapp.com",
  databaseURL: "https://sharespace-103b5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sharespace-103b5",
  storageBucket: "sharespace-103b5.appspot.com",
  messagingSenderId: "806165301284",
  appId: "1:806165301284:web:5f5390652fa40f15f070b1",
  measurementId: "G-XYBJ2Q7849"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const database = getDatabase(firebase);

export { firebase, analytics, database, ref, child, push, update, onValue };