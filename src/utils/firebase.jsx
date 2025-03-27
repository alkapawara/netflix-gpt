import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration (FIXED)
const firebaseConfig = {
  apiKey: "AIzaSyD5bXHzzGfMSvVFnWpLjjRkHPy6cgUDnWo",
  authDomain: "netflixgpt-de98a.firebaseapp.com",
  projectId: "netflixgpt-de98a",
  storageBucket: "netflixgpt-de98a.appspot.com", // ✅ Fixed
  messagingSenderId: "990344136566",
  appId: "1:990344136566:web:3e56ef9b76e46567a4dc57",
  measurementId: "G-0FT51KMBRL"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // ✅ Pass 'app' as an argument
