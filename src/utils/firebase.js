// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8cPb00V5kUgcUDOH3CcuBSCEEdtRIrWg",
  authDomain: "netflix-gpt-da832.firebaseapp.com",
  projectId: "netflix-gpt-da832",
  storageBucket: "netflix-gpt-da832.appspot.com",
  messagingSenderId: "370429846549",
  appId: "1:370429846549:web:0a18b6f0b8980a85231a1c",
  measurementId: "G-M4MD7G00GE"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();
