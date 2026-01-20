import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const msg = document.getElementById("message");

// Signup
window.signup = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.innerText = "Signup Successful ✅";
    })
    .catch((error) => {
      msg.innerText = error.message;
    });
}

// Login
window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.innerText = "Login Successful ✅";
      // Redirect to Dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      msg.innerText = error.message;
    });
}
