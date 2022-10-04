// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYl09MA4Ry7fLAx_gDs0z1fTkOnZVGw6s",
  authDomain: "job-project-b89be.firebaseapp.com",
  projectId: "job-project-b89be",
  storageBucket: "job-project-b89be.appspot.com",
  messagingSenderId: "656869605576",
  appId: "1:656869605576:web:f5ec3f928db9b10b3825fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;