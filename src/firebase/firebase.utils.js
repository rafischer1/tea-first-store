import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDVqqF--63wNpyA4qzq1k4LnadlBCmNaHk",
  authDomain: "tea-first-store.firebaseapp.com",
  projectId: "tea-first-store",
  storageBucket: "tea-first-store.appspot.com",
  messagingSenderId: "578742752749",
  appId: "1:578742752749:web:3f2f9ea585937d1487c3e4",
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
    } catch (error) {
      console.log("Error Creating User:", error.message);
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //always trigger google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
