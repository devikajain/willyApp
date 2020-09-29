import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDiNvuhkOXR9lGy2g_peApNmLrVgoZ36FQ",
    authDomain: "willyapp-9821b.firebaseapp.com",
    databaseURL: "https://willyapp-9821b.firebaseio.com",
    projectId: "willyapp-9821b",
    storageBucket: "willyapp-9821b.appspot.com",
    messagingSenderId: "418855744162",
    appId: "1:418855744162:web:4ec53a06c0be31a4541dfb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  