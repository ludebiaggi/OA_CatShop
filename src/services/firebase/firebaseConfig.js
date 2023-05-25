
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr8-4lIu7hifuh93hxP5V4CcNBgJMTv9I",
  authDomain: "coder-oacatshop.firebaseapp.com",
  projectId: "coder-oacatshop",
  storageBucket: "coder-oacatshop.appspot.com",
  messagingSenderId: "74782395386",
  appId: "1:74782395386:web:80c3c9837983893ac0f243"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
