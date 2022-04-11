// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmvSjZ9DAYwQjKwKxLU5a1sLthBXVrvnQ",
    authDomain: "kinbo-e352a.firebaseapp.com",
    projectId: "kinbo-e352a",
    storageBucket: "kinbo-e352a.appspot.com",
    messagingSenderId: "479836445588",
    appId: "1:479836445588:web:343aec433a5b0c31cccd81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;