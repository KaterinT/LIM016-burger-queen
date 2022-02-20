// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXLqX0ca43_nbCxCjsNuExnR5uRG5Y-q0",
  authDomain: "taste-burger.firebaseapp.com",
  projectId: "taste-burger",
  storageBucket: "taste-burger.appspot.com",
  messagingSenderId: "809058838428",
  appId: "1:809058838428:web:a3df374f67fc4a65fc4a59",
  measurementId: "G-R1J9VGYRYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;