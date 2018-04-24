import firebase from 'firebase';

// copy/paste this from your firebase console
var config = {
  apiKey: "AIzaSyD_kh7CboHomKFii7LLchdu87qQAJaF6hI",
  authDomain: "braindr-dev.firebaseapp.com",
  databaseURL: "https://braindr-dev.firebaseio.com",
  projectId: "braindr-dev",
  storageBucket: "braindr-dev.appspot.com",
  messagingSenderId: "13992024996"
};
firebase.initializeApp(config);

export const db = firebase.database();
