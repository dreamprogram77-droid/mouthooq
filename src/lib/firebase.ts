import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// We'll try to import the config. If it doesn't exist yet, we'll use a placeholder.
// This allows the app to compile even before the user accepts Firebase terms.
let firebaseConfig = {};
try {
  // @ts-ignore
  firebaseConfig = require('../../firebase-applet-config.json');
} catch (e) {
  console.warn("Firebase config not found. Please complete the Firebase setup.");
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
