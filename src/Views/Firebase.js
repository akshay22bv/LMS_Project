// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNOikkAqagBf5wSR9clCoHD7Lz-CzdPyw",
  authDomain: "fileupload-4447f.firebaseapp.com",
  projectId: "fileupload-4447f",
  storageBucket: "fileupload-4447f.appspot.com",
  messagingSenderId: "417050275870",
  appId: "1:417050275870:web:a29c11fd3f7bbbb469fe0f",
  measurementId: "G-KNF1M144D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
