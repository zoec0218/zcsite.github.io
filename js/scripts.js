/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaOpeMnfWrwyLR0n31Q3RDx3yk4xEAft0",
    authDomain: "zcsite-69a79.firebaseapp.com",
    databaseURL: "https://zcsite-69a79-default-rtdb.firebaseio.com",
    projectId: "zcsite-69a79",
    storageBucket: "zcsite-69a79.appspot.com",
    messagingSenderId: "594220108870",
    appId: "1:594220108870:web:203cdcc2e95b7a01120e47",
    measurementId: "G-XQXWMSDED6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

sign_in.addEventListener('click', (e) => {

var email = document.getElementById('floatingInput').value;
var password = document.getElementById('floatingPassword').value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
alert('user created!');
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

alert('errorMessage');
// ..
});
});
