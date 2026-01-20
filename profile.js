import { auth, db, storage } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Elements
const nameInput = document.getElementById("name");
const photoInput = document.getElementById("photo");
const msg = document.getElementById("message");

// Save Profile
window.saveProfile = async function() {
  const name = nameInput.value;
  const file = photoInput.files[0];

  if (!name || !file) {
    msg.innerText = "Enter name and select photo!";
    return;
  }

  try {
    // Upload photo to Storage
    const storageRef = ref(storage, `profilePhotos/${auth.currentUser.uid}`);
    await uploadBytes(storageRef, file);

    // Get Photo URL
    const photoURL = await getDownloadURL(storageRef);

    // Save Name + PhotoURL to Firestore
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name,
      photoURL,
      email: auth.currentUser.email
    });

    msg.innerText = "Profile saved ✅";
  } catch (err) {
    msg.innerText = err.message;
  }
}

// Go to Dashboard
window.goDashboard = function() {
  window.location.href = "dashboard.html";
}