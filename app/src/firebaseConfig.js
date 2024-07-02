import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBFtSQAxpNZ6EZm8pp8EamiKE_V3YuydKs",
  authDomain: "maria-furtado-bravo.firebaseapp.com",
  projectId: "maria-furtado-bravo",
  storageBucket: "maria-furtado-bravo.appspot.com",
  messagingSenderId: "736813165229",
  appId: "1:736813165229:web:1e82790f63ad155b4c3424",
  measurementId: "G-N57XCK39MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };