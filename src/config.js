import firebase from 'firebase';

var Config = {
    apiKey: "AIzaSyDU-PFxPfY0iGO4hT5lQg2HuF_2Sh3TF7c",
    authDomain: "learners-camp.firebaseapp.com",
    projectId: "learners-camp",
    storageBucket: "learners-camp.appspot.com",
    messagingSenderId: "512036386633",
    appId: "1:512036386633:web:3f9699b91f3e01b99acc98",
    measurementId: "G-RHVZPJ3J3E"
  };
  const fire=firebase.initializeApp(Config);
  export default fire