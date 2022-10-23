import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoLhj3AFZMH3nsqNyLoYH1RWALZwQ00lg",
  authDomain: "project-5367a.firebaseapp.com",
  projectId: "project-5367a",
  storageBucket: "project-5367a.appspot.com",
  messagingSenderId: "632653768655",
  appId: "1:632653768655:web:98f4ddb6839c5efe8854ba",
};

const app = !firebase.apps?.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
console.log(app);

export default db = app.firestore();
