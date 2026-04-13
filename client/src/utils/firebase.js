



import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e2e8f.firebaseapp.com",
  projectId: "interviewiq-e2e8f",
  storageBucket: "interviewiq-e2e8f.firebasestorage.app",
  messagingSenderId: "459615249437",
  appId: "1:459615249437:web:0445658399a55fd81e12f4",
  measurementId: "G-MEN0BVM544"
};


const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth,provider}