// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFsbO5648BkYIrVv0YWD02AGYuUVF6RL0",
  authDomain: "hip-rig-322710.firebaseapp.com",
  projectId: "hip-rig-322710",
  storageBucket: "hip-rig-322710.appspot.com",
  messagingSenderId: "150544410145",
  appId: "1:150544410145:web:1ad46e344374ed0910a560",
  measurementId: "G-DK2QDDVP28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};
