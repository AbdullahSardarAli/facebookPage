

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDAJdxyN4xhuXIOj3XLULRWvG2BfKwPwZo",
    authDomain: "edwardproject-c72bc.firebaseapp.com",
    projectId: "edwardproject-c72bc",
    storageBucket: "edwardproject-c72bc.firebasestorage.app",
    messagingSenderId: "367423365812",
    appId: "1:367423365812:web:f63f76fad7f4b56a38ede1",
    measurementId: "G-1L3LC6B8F8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)
  console.log(auth)

//   let document 

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupButton = document.getElementById("signup");

signupButton.addEventListener("click",createnew)
    function createnew(){
        const email = emailInput.value;
        const password = passwordInput.value;
         console.log("sign up with email",email,password)

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
      if (emailInput.value && passwordInput.value) {
        alert("Sign in successful!");
        emailInput.value = "";
        passwordInput.value = "";
      } else {
        alert("Please enter both email and password.");
      }
} 

