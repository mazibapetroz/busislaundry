// firebase-init.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  // rest of config...
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
