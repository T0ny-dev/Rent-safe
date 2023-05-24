// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHQt82tQgHCri322ByV8IBtKBPYfaHzH8",
  authDomain: "rent-safe-6feee.firebaseapp.com",
  projectId: "rent-safe-6feee",
  storageBucket: "rent-safe-6feee.appspot.com",
  messagingSenderId: "1001703742969",
  appId: "1:1001703742969:web:7bc573cc7da76e30f5f128",
  measurementId: "G-ZZJ991CXWT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseApp;