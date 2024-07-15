import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Load .env variables
const firebaseConfig = {
    apiKey: "AIzaSyDY0Z8fdddBV8vtYq5x9yYZgBbrOV9_5b0",
    authDomain: "labsm-5a670.firebaseapp.com",
    projectId: "labsm-5a670",
    storageBucket: "labsm-5a670.appspot.com",
    messagingSenderId: "748957668787",
    appId: "1:748957668787:web:2845b59b6b9e4d3cba67c6",
};

const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
