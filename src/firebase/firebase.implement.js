// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
  // apiKey: "AIzaSyCwRDwNzIGVAKPzcztyDN4LgCOaEWET4o8",
  // authDomain: "summer-camp-f0d29.firebaseapp.com",
  // projectId: "summer-camp-f0d29",
  // storageBucket: "summer-camp-f0d29.appspot.com",
  // messagingSenderId: "950321601941",
  // appId: "1:950321601941:web:98067725c6ab5310eeea9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;