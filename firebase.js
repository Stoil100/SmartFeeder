// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnbjTMlBkbeD15djiMJXfqaB89bqRb2Qk",
  authDomain: "smart-feeder-backend.firebaseapp.com",
  databaseURL: "https://smart-feeder-backend-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-feeder-backend",
  storageBucket: "smart-feeder-backend.appspot.com",
  messagingSenderId: "359818048994",
  appId: "1:359818048994:web:84d389f66338af1055f5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const firestore = getFirestore(app);
const db=getDatabase(app);

export {auth, firestore,db};