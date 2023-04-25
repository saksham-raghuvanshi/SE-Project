// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import "./auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_JyvkbOUMGVBGxaqJwJJXa7cwn-Db_-s",
  authDomain: "thapar-sports.firebaseapp.com",
  projectId: "thapar-sports",
  storageBucket: "thapar-sports.appspot.com",
  messagingSenderId: "692734275713",
  appId: "1:692734275713:web:f0cc0dc0b424a598829d80",
  measurementId: "G-7D8SYK72WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const auth = getAuth(app);

export default app;