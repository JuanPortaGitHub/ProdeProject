import { initializeApp } from "@firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAdzI_wPsW7fBL_VMcTMgzUVzhlV6fZ4vY",
  authDomain: "nextfirebase-347df.firebaseapp.com",
  projectId: "nextfirebase-347df",
  storageBucket: "nextfirebase-347df.appspot.com",
  messagingSenderId: "1013905362018",
  appId: "1:1013905362018:web:e2580374f50fbf2a98953b",
  measurementId: "G-TT0YF5R6SM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth()
