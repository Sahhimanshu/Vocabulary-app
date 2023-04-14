import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC836z0RzemFdgS_fH7FnHmx6DOwNEYuv8",
    authDomain: "vocabulary-10.firebaseapp.com",
    projectId: "vocabulary-10",
    storageBucket: "vocabulary-10.appspot.com",
    messagingSenderId: "451617308989",
    appId: "1:451617308989:web:c4576fbb01a38082540554",
    measurementId: "G-C26YCB1Q08"
  };

  const app=initializeApp(firebaseConfig);
  export const db =getFirestore(app)
  export const auth= getAuth(app)

  