import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgVMs_1HVa8tbb3uWVDHly5-d5r9bYLvg",
  authDomain: "wedding-42ee9.firebaseapp.com",
  projectId: "wedding-42ee9",
  storageBucket: "wedding-42ee9.appspot.com",
  messagingSenderId: "160436341518",
  appId: "1:160436341518:web:6392edf4c8d4c1e669655f",
  measurementId: "G-8ZZGM0RJNS",
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
