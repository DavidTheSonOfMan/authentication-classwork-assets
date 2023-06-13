// Fire base config

const firebaseConfig = {
    apiKey: "AIzaSyB1OI7kR9svf0_UTFzmWvZrwxDDXAczK0Q",
    authDomain: "test-authentication-2d916.firebaseapp.com",
    projectId: "test-authentication-2d916",
    storageBucket: "test-authentication-2d916.appspot.com",
    messagingSenderId: "700251225872",
    appId: "1:700251225872:web:8c0e0bd694cdc0071def95"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
  let signUpButton = document.getElementById("signup")

  signUpButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");


    auth
    .createUserWithEmailAndPassword(email.value,password.value)
    .then((userCredential) => {
        location.reload();
        //signed in
        var user = userCredential.user;
        console.log("user, user.mail"); 
  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMeesge = error.message;
    console.log("error code", errorCode);
    console.log("error Message", errorMessage);
 });
});
//Signin Function
  let signInButon = document.getElementById("signin");

  signInButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signin click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();
        //signed in
        var user = userCredential.user;
        console.log("user, user.mail"); 
        window.location = "home.html";
  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMeesge = error.message;
    console.log("error code", errorCode);
    console.log("error Message", errorMessage);
 });
  });


//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        var users = document.getElementById("user");
        user.appendChild(text);
        console.log(users);
    } else{

    }
});
