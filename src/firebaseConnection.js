import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABp5WklYxAWe7BVPnIBzZ89OfNZbfMmkQ",
  authDomain: "cursoapp-e8086.firebaseapp.com",
  projectId: "cursoapp-e8086",
  storageBucket: "cursoapp-e8086.appspot.com",
  messagingSenderId: "1087761223412",
  appId: "1:1087761223412:web:ee1776729033f4895b18a1",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
