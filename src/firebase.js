import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNfsz0Mjg-Gkd7NPXhfTwT2iIQSwZBYMM",
    authDomain: "fb-clone-497fd.firebaseapp.com",
    projectId: "fb-clone-497fd",
    storageBucket: "fb-clone-497fd.appspot.com",
    messagingSenderId: "965926138867",
    appId: "1:965926138867:web:13508d5b63e4ab38d55886",
    measurementId: "G-FRVE0M46MJ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); // connect to firestore db
  const auth = firebase.auth(); // authentication with email 
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
