// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjj3B15vEds6w60N_fThR0uZWjf80ijcU",
  authDomain: "portfolio-55d39.firebaseapp.com",
  projectId: "portfolio-55d39",
  storageBucket: "portfolio-55d39.appspot.com",
  messagingSenderId: "988751532039",
  appId: "1:988751532039:web:02e6d0569bdbe713929aa2",
  measurementId: "G-STDL1R0M4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

