
var firebaseConfig = {
    apiKey: "AIzaSyB2LLX79DP09_TulwQcRyQZVsWut87ph4A",
    authDomain: "iliyan-firebase-test.firebaseapp.com",
    databaseURL: "https://iliyan-firebase-test-default-rtdb.firebaseio.com",
    projectId: "iliyan-firebase-test",
    storageBucket: "iliyan-firebase-test.appspot.com",
    messagingSenderId: "168482777576",
    appId: "1:168482777576:web:efb7de204ee8c4f2f71c5d",
    measurementId: "G-6J5VTRCMNP"
};

const firebase = window.firebase.initializeApp(firebaseConfig)
const db = window.firebase.firestore()
db.settings({ timestampsInSnapshots: true }); 
export {firebase, db}