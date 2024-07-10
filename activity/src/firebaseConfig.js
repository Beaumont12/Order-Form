import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxAbX7cLPFVtbziV_7NoXdRroJ82fchdA",
  authDomain: "orderform-c604e.firebaseapp.com",
  projectId: "orderform-c604e",
  storageBucket: "orderform-c604e.appspot.com",
  messagingSenderId: "851825130651",
  appId: "1:851825130651:web:078607738ab3e898741a3e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };