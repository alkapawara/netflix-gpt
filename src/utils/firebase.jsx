// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5bXHzzGfMSvVFnWpLjjRkHPy6cgUDnWo",
  authDomain: "netflixgpt-de98a.firebaseapp.com",
  projectId: "netflixgpt-de98a",
  storageBucket: "netflixgpt-de98a.firebasestorage.app",
  messagingSenderId: "990344136566",
  appId: "1:990344136566:web:3e56ef9b76e46567a4dc57",
  measurementId: "G-0FT51KMBRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();