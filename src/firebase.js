import Firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTbYwRuu_CpVxRfLaBxcfhzx1d8OWxAd8",
    authDomain: "clone-6e6b0.firebaseapp.com",
    projectId: "clone-6e6b0",
    storageBucket: "clone-6e6b0.appspot.com",
    messagingSenderId: "221032156397",
    appId: "1:221032156397:web:1d172dbd8074e3cf6850e4",
    measurementId: "G-9VPB7CFTJW"
  };

const firebaseApp = Firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //firestore is a realtime db in firebase
const auth = Firebase.auth();

export {db, auth};