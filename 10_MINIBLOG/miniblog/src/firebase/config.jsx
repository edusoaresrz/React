import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZYuSVV9r_kSlOnmQljj79CUyPnz8Ajks",
  authDomain: "miniblog-7f180.firebaseapp.com",
  projectId: "miniblog-7f180",
  storageBucket: "miniblog-7f180.firebasestorage.app",
  messagingSenderId: "646282607182",
  appId: "1:646282607182:web:2d16dd47a26513f0f9a11f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
