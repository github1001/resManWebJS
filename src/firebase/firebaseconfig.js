import * as firebase from 'firebase'

var config = {
apiKey: "AIzaSyDWBrJzZ4J1mdh_iQddsDTHU3T-1BlMf6k",
    authDomain: "firecha-56402.firebaseapp.com",
    databaseURL: "https://firecha-56402.firebaseio.com",
    projectId: "firecha-56402",
    storageBucket: "firecha-56402.appspot.com",
    messagingSenderId: "636033785007"
};


const app = firebase.initializeApp(config);
export { app }