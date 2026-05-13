import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClvYVp4URC1npOp4VeVI9s6bvhTyInyPQ",
  authDomain: "tradexlive-6d4b4.firebaseapp.com",
  projectId: "tradexlive-6d4b4",
  storageBucket: "tradexlive-6d4b4.firebasestorage.app",
  messagingSenderId: "344597514949",
  appId: "1:344597514949:web:33c7615bd8376750bf3eac",
  measurementId: "G-MKQ2WB7MHT"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
