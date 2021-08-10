//  DB - Jenny

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTH0cUchs72AUvB-8iPMe6A22aqbs21hM",
    authDomain: "to-do-list-f0a88.firebaseapp.com",
    databaseURL: "https://to-do-list-f0a88-default-rtdb.firebaseio.com",
    projectId: "to-do-list-f0a88",
    storageBucket: "to-do-list-f0a88.appspot.com",
    messagingSenderId: "324505320954",
    appId: "1:324505320954:web:21f12d2992f61e0d91f843"
};
firebase.initializeApp(firebaseConfig);

export default firebase;