import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const databaseId = firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
  ? firebaseConfig.firestoreDatabaseId 
  : undefined;

// Initialize Firestore with long-polling enabled in browser to prevent iframe reverse-proxy WebChannel streaming drops
export const db = (() => {
  if (typeof window === 'undefined') {
    return getFirestore(app, databaseId);
  }
  try {
    return initializeFirestore(app, {
      experimentalForceLongPolling: true,
    }, databaseId);
  } catch {
    return getFirestore(app, databaseId);
  }
})();

export const auth = getAuth(app);

export default app;
