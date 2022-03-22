import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiDsQfMv51YN8g_myVVDLuqClSxqvm0yE",
  authDomain: "journal-1e5fc.firebaseapp.com",
  projectId: "journal-1e5fc",
  storageBucket: "journal-1e5fc.appspot.com",
  messagingSenderId: "95163567953",
  appId: "1:95163567953:web:3a74ce0776a1d14f230d70",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
