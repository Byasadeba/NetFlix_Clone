import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8FEbQKiayPycZZBvD4rZ-sFtBZeZ5g94",
  authDomain: "react-netflix-clone-2f948.firebaseapp.com",
  projectId: "react-netflix-clone-2f948",
  storageBucket: "react-netflix-clone-2f948.appspot.com",
  messagingSenderId: "492684325142",
  appId: "1:492684325142:web:93f06b79347665bef7e037",
  measurementId: "G-RP7TC89S7B"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);