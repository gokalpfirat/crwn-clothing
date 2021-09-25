import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCX6FDF8EuwKhZPEgcyQIOgzEOO-rwnxNc",
  authDomain: "crwn-db-892be.firebaseapp.com",
  projectId: "crwn-db-892be",
  storageBucket: "crwn-db-892be.appspot.com",
  messagingSenderId: "397457956076",
  appId: "1:397457956076:web:53eb8b826c3a88a58159c9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
