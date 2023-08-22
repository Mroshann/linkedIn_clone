import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlyyQq_uLy_nQFJYwN898OtO3RDXucAVc",
    authDomain: "linkedin-clone-201a5.firebaseapp.com",
    projectId: "linkedin-clone-201a5",
    storageBucket: "linkedin-clone-201a5.appspot.com",
    messagingSenderId: "217695892011",
    appId: "1:217695892011:web:39cde9608125169d59306e",
    measurementId: "G-MRJ2FL2CZS"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth}