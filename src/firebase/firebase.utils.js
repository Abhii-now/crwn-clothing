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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log("error creating user", e);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
