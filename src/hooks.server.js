import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// FIREBASE AUTH

const firebaseConfig = {
  apiKey: "AIzaSyAI2CBPZSu5Y9AfJ2Bo9pObOPkTOjcQHm0",
  authDomain: "elfabet-cb141.firebaseapp.com",
  projectId: "elfabet-cb141",
  storageBucket: "elfabet-cb141.appspot.com",
  messagingSenderId: "982185309892",
  appId: "1:982185309892:web:67fdaf4cbb5a5d39d3bb91",
  measurementId: "G-3QRT3JC2W9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);