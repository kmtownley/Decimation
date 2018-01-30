import firebase from "firebase";
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyBmYoz8WYgpaAXg_eBoeC0buDvc9rd0QWc",
    authDomain: "decimation-dffa8.firebaseapp.com",
    databaseURL: "https://decimation-dffa8.firebaseio.com",
    projectId: "decimation-dffa8",
    storageBucket: "",
    messagingSenderId: "805290720202"
};


const firebaseApp = firebase.initializeApp(config);

const fb = firebaseApp.database();

export default fb;
