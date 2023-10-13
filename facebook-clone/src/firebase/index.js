// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChJKxjnFRR2-vkjcLbkvNiRr3uK0mzWQI",
  authDomain: "fb-cloning-c106c.firebaseapp.com",
  projectId: "fb-cloning-c106c",
  storageBucket: "fb-cloning-c106c.appspot.com",
  messagingSenderId: "723343303289",
  appId: "1:723343303289:web:de71950c02c0b2311e2aa8",
  measurementId: "G-T2PM5ZJB59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export default db;