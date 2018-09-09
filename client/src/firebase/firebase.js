import firebase from 'firebase/app';
import 'firebase/auth';

var keysfb = require("./keysfb");
console.log("PROCESS:", process.env);

const config = {
  apiKey: keysfb.firebase_key,
  authDomain: keysfb.firebase_auth,
  databaseURL: keysfb.firebase_url,
  projectId: keysfb.firebase_id,
  storageBucket: keysfb.firebase_bucket,
  messagingSenderId: keysfb.firebase_sender
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};