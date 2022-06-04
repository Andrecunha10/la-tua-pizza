import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQkoM0XyTWUC25EUMeg1mg59XxtF6mrv4",
  authDomain: "la-tua-pizza-alc.firebaseapp.com",
  projectId: "la-tua-pizza-alc",
  storageBucket: "la-tua-pizza-alc.appspot.com",
  messagingSenderId: "823812490416",
  appId: "1:823812490416:web:da3aa0ded39b7eac51a775"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)