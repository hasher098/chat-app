import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_CHAT_API_KEY,
    authDomain: "chat-app-9b4de.firebaseapp.com",
    projectId: "chat-app-9b4de",
    storageBucket: "chat-app-9b4de.appspot.com",
    messagingSenderId: "196807906597",
    appId: process.env.REACT_APP_CHAT_APP_ID,
  })
  .auth();
