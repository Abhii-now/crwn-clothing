import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDPwm7y9rmrpzIx9GpyqIbkJiRKEncKV58",
  authDomain: "crwn-db-635c7.firebaseapp.com",
  projectId: "crwn-db-635c7",
  storageBucket: "crwn-db-635c7.appspot.com",
  messagingSenderId: "102382238807",
  appId: "1:102382238807:web:5ab4aa24b19edbc2dab712",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;