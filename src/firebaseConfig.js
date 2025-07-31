import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyB1GI469Bl6iG-uQfruA4Wbm7WTtoWWOAM",
  authDomain: "creatorflow-ad62f.firebaseapp.com",
  projectId: "creatorflow-ad62f",
  storageBucket: "creatorflow-ad62f.appspot.com",
  messagingSenderId: "996210401929",
  appId: "1:996210401929:web:da3019b805d9eff45d1c58"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 