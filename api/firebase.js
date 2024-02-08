import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE_3xPmaj3wjuZ7yrrmUv13qBODmIz3dI",
  authDomain: "adventure-journal-e990f.firebaseapp.com",
  projectId: "adventure-journal-e990f",
  storageBucket: "adventure-journal-e990f.appspot.com",
  messagingSenderId: "408232805513",
  appId: "1:408232805513:web:258e02cabf0b7ee381f258",
  measurementId: "G-G4GSTZ2FSX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
