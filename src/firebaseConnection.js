import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth  } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAlBxAIKuocTF5NaGjuD26s7WYBiq8Qw4s",
  authDomain: "financasdb.firebaseapp.com",
  projectId: "financasdb",
  storageBucket: "financasdb.firebasestorage.app",
  messagingSenderId: "323096504089",
  appId: "1:323096504089:web:48c81c7876f19a904a8788"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)