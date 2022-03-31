import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDKjmceAtumX81p01cRYpSXtqj1Bc3Na10",
    authDomain: "mobile-restaurante.firebaseapp.com",
    projectId: "mobile-restaurante",
    storageBucket: "mobile-restaurante.appspot.com",
    messagingSenderId: "877655805791",
    appId: "1:877655805791:web:72f460fdd9bc32aed830ea"
  }
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig)