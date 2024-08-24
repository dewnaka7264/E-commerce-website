// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
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

// Initialize Authentication and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

// Set authentication persistence
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("Persistence set to local");
    })
    .catch((error) => {
        console.error("Error setting persistence:", error.code, error.message);
    });

export default app;
export { auth, provider, firestore, signInWithPopup, signOut };
