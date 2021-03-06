import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAPCb1JrH1WaKUvIelWUzwLxjfc-9swA4E",
    authDomain: "todo-with-firebase-d85b0.firebaseapp.com",
    databaseURL: "https://todo-with-firebase-d85b0.firebaseio.com",
    projectId: "todo-with-firebase-d85b0",
    storageBucket: "todo-with-firebase-d85b0.appspot.com",
    messagingSenderId: "10663939841",
    appId: "1:10663939841:web:3b295bd79b1045e248d500",
    measurementId: "G-9LTJ96DK81"
};

const firebaseApp: firebase.app.App = firebase.initializeApp(config)

const db: firebase.firestore.Firestore = firebaseApp.firestore()
const auth: firebase.auth.Auth = firebaseApp.auth()

export { db, auth, firebase }