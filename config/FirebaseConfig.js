// Import the functions you need from the SDKs you need
// Import required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-47690.firebaseapp.com",
  databaseURL: "https://meeting-scheduler-47690-default-rtdb.firebaseio.com",
  projectId: "meeting-scheduler-47690",
  storageBucket: "meeting-scheduler-47690.firebasestorage.app",
  messagingSenderId: "329028270883",
  appId: "1:329028270883:web:467a3ba28f35af1519aa96",
  measurementId: "G-FH67BVHPTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore with persistence settings
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

console.log("Persistence enabled with multiple tab support.");