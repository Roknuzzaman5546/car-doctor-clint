// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN61sW0Sf7LOPbKTR7KRSnyf2pd67kIhY",
  authDomain: "car-doctor-resources.firebaseapp.com",
  projectId: "car-doctor-resources",
  storageBucket: "car-doctor-resources.appspot.com",
  messagingSenderId: "1026177053563",
  appId: "1:1026177053563:web:6e445eb7c40ea0a3bb03de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
export default auth;