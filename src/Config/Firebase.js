import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfjvWsxYI9dUGfbp4R0L-3CDaSO238j4w",
  authDomain: "vite-contact-app-a29da.firebaseapp.com",
  projectId: "vite-contact-app-a29da",
  storageBucket: "vite-contact-app-a29da.appspot.com",
  messagingSenderId: "413486803841",
  appId: "1:413486803841:web:f972755c73db01e7f25680"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)