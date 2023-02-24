import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAdzcpAp5r7D5z-3SGLonO3zNvSKS9N738",
  authDomain: "facebook-clone-494c1.firebaseapp.com",
  projectId: "facebook-clone-494c1",
  storageBucket: "facebook-clone-494c1.appspot.com",
  messagingSenderId: "924999614024",
  appId: "1:924999614024:web:a7a35a1576088ec1c6227d",
  measurementId: "G-E369YFF37D",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app),
  db = getFirestore(),
  storage = getStorage(app);

export { auth, db, storage };

export default app;
