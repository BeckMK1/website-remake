import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyC1E0SOJi4LY1xgnpTeGOyBEqkopNHK9XU",
    authDomain: "wow-list-f94a6.firebaseapp.com",
    databaseURL: "https://wow-list-f94a6.firebaseio.com",
    projectId: "wow-list-f94a6",
    storageBucket: "wow-list-f94a6.appspot.com",
    messagingSenderId: "259041077358",
    appId: "1:259041077358:web:2379f227e4e886c9ee5e7f"
  })
  .firestore()