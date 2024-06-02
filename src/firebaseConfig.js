// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-lENd3SL370TqmLbrapDmGTRHzoE0o0Y",
  authDomain: "gymshark-732cd.firebaseapp.com",
  databaseURL: "https://gymshark-732cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gymshark-732cd",
  storageBucket: "gymshark-732cd.appspot.com",
  messagingSenderId: "24246229329",
  appId: "1:24246229329:web:93e223e4b2cb816155db70",
  measurementId: "G-3RJMCW5PBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);