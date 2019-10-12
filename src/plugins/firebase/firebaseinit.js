import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/'
const firebaseConfig = {
  apiKey: "AIzaSyAfyy6_LZU0-NoeDYmpDB4F1Xt3VdeNPgw",
  authDomain: "gainsville-4e320.firebaseapp.com",
  databaseURL: "https://gainsville-4e320.firebaseio.com",
  projectId: "gainsville-4e320",
  storageBucket: "gainsville-4e320.appspot.com",
  messagingSenderId: "89788900648",
  appId: "1:89788900648:web:ed72b6b6d288d8d3"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const storageRef = storage.ref();
