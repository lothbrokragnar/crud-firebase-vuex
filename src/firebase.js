import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDUgoJ5A1VLhISxCBdnpXupR66KmLS-Ndc",
    authDomain: "crud-firebase-vuex.firebaseapp.com",
    projectId: "crud-firebase-vuex",
    storageBucket: "crud-firebase-vuex.appspot.com",
    messagingSenderId: "867654572395",
    appId: "1:867654572395:web:c2e2603dbe46b39638d42e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const usersCollection = collection(db, 'users')

export default usersCollection