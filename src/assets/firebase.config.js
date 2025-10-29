// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvoQYu_8tHSkeJWyk6aLDJ3aOz1rvfarQ",
  authDomain: "ecoquest-632c2.firebaseapp.com",
  projectId: "ecoquest-632c2",
  storageBucket: "ecoquest-632c2.firebasestorage.app",
  messagingSenderId: "988551078581",
  appId: "1:988551078581:web:be0edf1b6ef941a771d4fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);