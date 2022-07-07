import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDIB145I43KFoTuTY60IhVc0nVDWvY-YEE",
  authDomain: "linkedin-10e6b.firebaseapp.com",
  databaseURL: "https://linkedin-10e6b-default-rtdb.firebaseio.com",
  projectId: "linkedin-10e6b",
  storageBucket: "linkedin-10e6b.appspot.com",
  messagingSenderId: "866627268604",
  appId: "1:866627268604:web:d90a021aae93438c494c79"
};


// this line connects everything to our database, set everything up. we parse the firebaseConfig into the firebase.initializeApp 
const firebaseApp = firebase.initializeApp(firebaseConfig);
//  inside of db I have access to my variable
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};