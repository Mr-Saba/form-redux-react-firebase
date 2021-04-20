import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBAV-wBL74c2VlHdJGhOL5qtTRdHXdOzO4",
    authDomain: "first-project-52caf.firebaseapp.com",
    projectId: "first-project-52caf",
    storageBucket: "first-project-52caf.appspot.com",
    messagingSenderId: "123246906899",
    appId: "1:123246906899:web:4d81eb669f582d8086b9e6"
  };

  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore()
  const auth = firebase.auth()

  export {firestore, auth }