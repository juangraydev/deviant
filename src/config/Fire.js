import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChmK6UolQBjbHiCaymNbX7a_fYIaAe3Ts",
    authDomain: "local-b5f9a.firebaseapp.com",
    databaseURL: "https://local-b5f9a.firebaseio.com",
    projectId: "local-b5f9a",
    storageBucket: "local-b5f9a.appspot.com",
    messagingSenderId: "691543773014",
    appId: "1:691543773014:web:bbf32ce7d5595a980390f7",
    measurementId: "G-NH100NXHPP"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;