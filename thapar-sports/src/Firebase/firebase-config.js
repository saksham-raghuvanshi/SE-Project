import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_JyvkbOUMGVBGxaqJwJJXa7cwn-Db_-s",
    authDomain: "thapar-sports.firebaseapp.com",
    projectId: "thapar-sports",
    storageBucket: "thapar-sports.appspot.com",
    messagingSenderId: "692734275713",
    appId: "1:692734275713:web:f0cc0dc0b424a598829d80",
    measurementId: "G-7D8SYK72WC"
  };


  const app = initializeApp(firebaseConfig);
  export  const db = getFirestore(app);
  export const auth = getAuth(app); 

export default auth;