// js/firebase.js

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// তোমার Firebase Config এখানে বসাবে
const firebaseConfig = {
  apiKey: "AIzaSyBkMc3jhgxl7vzI2mXeLtkd0ZDens9-oMs",
  authDomain: "campusconnect-99cb4.firebaseapp.com",
  projectId: "campusconnect-99cb4",
  storageBucket: "campusconnect-99cb4.firebasestorage.app",
  messagingSenderId: "392574182594",
  appId: "1:392574182594:web:057ffc48e3c1ad5071475b",
  measurementId: "G-S56XP0FQEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);