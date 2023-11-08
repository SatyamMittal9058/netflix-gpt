// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATjijgcn2pfhg_-wx6GbSlus5Pww_wf_E",
  authDomain: "netfligpt.firebaseapp.com",
  projectId: "netfligpt",
  storageBucket: "netfligpt.appspot.com",
  messagingSenderId: "770962229101",
  appId: "1:770962229101:web:741ab5a65313ff12423c64",
  measurementId: "G-JQQ4Z388XY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();