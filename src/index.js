import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIbl_JAztlK8bPpRLQtUQyMHB5vQ77Ic",
  authDomain: "cria-suelta.firebaseapp.com",
  projectId: "cria-suelta",
  storageBucket: "cria-suelta.appspot.com",
  messagingSenderId: "132934033100",
  appId: "1:132934033100:web:16781412b2253e62e86c69"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

