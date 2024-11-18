// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP6yJnzUjEkZi_kZj77MiwSLnKTRShFV8",
  authDomain: "assingment-10-5294b.firebaseapp.com",
  projectId: "assingment-10-5294b",
  storageBucket: "assingment-10-5294b.firebasestorage.app",
  messagingSenderId: "856537500082",
  appId: "1:856537500082:web:8cabe15580a45794fe7cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);