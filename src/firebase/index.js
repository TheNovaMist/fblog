import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKnhM0mkOf9Yo0VZmFyXaPUAhQQmrZ4SE",
  authDomain: "ysama-fblog.firebaseapp.com",
  projectId: "ysama-fblog",
  storageBucket: "ysama-fblog.appspot.com",
  messagingSenderId: "556744575097",
  appId: "1:556744575097:web:72d3185c99bbe7a8572ca8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
