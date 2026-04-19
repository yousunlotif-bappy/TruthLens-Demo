import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyANa0BHWANlGuml3I0dq2FYXsnsbUxWreE",
  authDomain: "truth-lens-85847.firebaseapp.com",
  projectId: "truth-lens-85847",
  storageBucket: "truth-lens-85847.firebasestorage.app",
  messagingSenderId: "599549080374",
  appId: "1:599549080374:web:f3d9d2afb96c9f5ec53997",
  measurementId: "G-E5FXFS1HD8"
};




const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
