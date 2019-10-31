import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
export const firebaseConfig = {
    apiKey: "AIzaSyAfyy6_LZU0-NoeDYmpDB4F1Xt3VdeNPgw",
    authDomain: "gainsville-4e320.firebaseapp.com",
    databaseURL: "https://gainsville-4e320.firebaseio.com",
    projectId: "gainsville-4e320",
    storageBucket: "gainsville-4e320.appspot.com",
    messagingSenderId: "89788900648",
    appId: "1:89788900648:web:ed72b6b6d288d8d3"
  };
  export const auth = firebase.auth(); //authentication
  export const db = firebase.firestore(); //firestore
  export const storage = firebase.storage().ref(); //storage
  export const dataBase = firebase.database();
