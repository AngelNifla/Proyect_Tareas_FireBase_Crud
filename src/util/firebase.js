import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSGbGQme6j5m_7f3Iu1V7xmYCxKt0yPyY",
    authDomain: "tareas-d.firebaseapp.com",
    databaseURL: "https://tareas-d-default-rtdb.firebaseio.com",
    projectId: "tareas-d",
    storageBucket: "tareas-d.appspot.com",
    messagingSenderId: "618451231204",
    appId: "1:618451231204:web:e48dac0298398915b6e7f1",
};
firebase.initializeApp(firebaseConfig);

export default firebase;