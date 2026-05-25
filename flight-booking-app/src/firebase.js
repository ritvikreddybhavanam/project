import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZxxbg50D5CO6qLkH2Rx2uDZM1LCkCEtQ",
    authDomain: "sky-guide-b6821.firebaseapp.com",
    projectId: "sky-guide-b6821",
    storageBucket: "sky-guide-b6821.firebasestorage.app",
    messagingSenderId: "215240737719",
    appId: "1:215240737719:web:652dc47483d013cc371e32",
    measurementId: "G-DEWWQL6X1N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

