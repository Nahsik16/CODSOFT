
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from  'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDOjtqy_h6L6eB9p55p77ug7HoKbU7g0yw",
  authDomain: "product-catalog-b067c.firebaseapp.com",
  projectId: "product-catalog-b067c",
  storageBucket: "product-catalog-b067c.appspot.com",
  messagingSenderId: "426931282962",
  appId: "1:426931282962:web:c2db8b9069dc40c7bfa4cb",
  measurementId: "G-KW33MB2JGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider =new GoogleAuthProvider();
export {auth,provider}