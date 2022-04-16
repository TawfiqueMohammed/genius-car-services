// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOu8Vo5oYXBXwalpJHS3vRahI9gWEfu1s",
    authDomain: "genius-car-services-9e42d.firebaseapp.com",
    projectId: "genius-car-services-9e42d",
    storageBucket: "genius-car-services-9e42d.appspot.com",
    messagingSenderId: "635178550079",
    appId: "1:635178550079:web:54348bc8cfe636f560498a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;