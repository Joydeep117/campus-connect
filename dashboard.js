import { auth, db } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const postsContainer = document.getElementById("postsContainer");
const postInput = document.getElementById("postMessage");

// Firestore reference
const postsRef = collection(db, "posts");

// Real-time fetch posts
const q = query(postsRef, orderBy("timestamp", "desc"));
onSnapshot(q, (snapshot) => {
  postsContainer.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<strong>${post.user}</strong>: ${post.message}`;
    postsContainer.appendChild(div);
  });
});

// Add post
window.addPost = async function() {
  const message = postInput.value;
  if(message === "") return alert("Write something!");
  try {
    await addDoc(postsRef, {
      user: auth.currentUser.email,
      message,
      timestamp: new Date()
    });
    postInput.value = "";
  } catch (err) {
    alert(err.message);
  }
}

// Logout
window.logout = function() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}