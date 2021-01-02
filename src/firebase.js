import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgeuW5r7knMRvcU3kgbjc5V1hFoWUB1FI",
    authDomain: "landing-page-796cb.firebaseapp.com",
    projectId: "landing-page-796cb",
    storageBucket: "landing-page-796cb.appspot.com",
    messagingSenderId: "931369236732",
    appId: "1:931369236732:web:7078c6d5bc1bc5c38d3f79",
    measurementId: "G-6MY8W8JDG9"
  
};
const firebasApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();

export {db , auth };