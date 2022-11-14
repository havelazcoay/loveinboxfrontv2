import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDY4BasRzdQwtFtO1kvoP8KP9Qxy6o0Fvs",
    authDomain: "loveinbox-bbd13.firebaseapp.com",
    projectId: "loveinbox-bbd13",
    storageBucket: "loveinbox-bbd13.appspot.com",
    messagingSenderId: "295865354339",
    appId: "1:295865354339:web:c7e7fcb5828b961bd1d056"
  };


  const App = firebase.initializeApp (firebaseConfig);

  export const db = getFirestore(App);

  const auth = firebase.auth();

  export { auth }