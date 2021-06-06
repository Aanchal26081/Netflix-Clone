import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUUlQglwJ0ltXRordLXd6BrXHI1JA6CgU",
    authDomain: "netflix-clone-44138.firebaseapp.com",
    projectId: "netflix-clone-44138",
    storageBucket: "netflix-clone-44138.appspot.com",
    messagingSenderId: "100892878567",
    appId: "1:100892878567:web:4c69da6422ff41f5012442"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 export { auth };
 export default db;