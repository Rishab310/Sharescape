import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAaolBd0cu7BL7EzOACmvXyyVQvBvbtR4s",
  authDomain: "socialmedia-2021.firebaseapp.com",
  projectId: "socialmedia-2021",
  storageBucket: "socialmedia-2021.appspot.com",
  messagingSenderId: "802062064669",
  appId: "1:802062064669:web:daedc036db4542b5027af4",
  measurementId: "G-0BV1WTY1XB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase;