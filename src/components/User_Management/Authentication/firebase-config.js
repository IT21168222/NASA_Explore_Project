// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN1lHO6aP_JwdxjD2uHCt8LLGirUMZnog",
  authDomain: "nasa-frontend-project.firebaseapp.com",
  projectId: "nasa-frontend-project",
  storageBucket: "nasa-frontend-project.appspot.com",
  messagingSenderId: "1002905725303",
  appId: "1:1002905725303:web:11cba706649cbc37de9972"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();



