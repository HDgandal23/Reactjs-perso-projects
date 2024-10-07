// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNOs_hX12hWJQWAqnf3QxEf5iGxEWoEIE",
  authDomain: "social-network-49c8a.firebaseapp.com",
  projectId: "social-network-49c8a",
  storageBucket: "social-network-49c8a.appspot.com",
  messagingSenderId: "728149628013",
  appId: "1:728149628013:web:9bc9004fd826d3c2551b64",
  measurementId: "G-JWKECXNRB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()


