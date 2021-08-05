firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
document.getElementById("user1").style.display="block";
  } else {
    // No user is signed in.
    document.getElementById("user1").style.display="none";
  }
});
function validate1()
{
   var in1 = document.getElementById("id5").value;
   var in2 = document.getElementById("id6").value;
   firebase.auth().createUserWithEmailAndPassword(in1,in2)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  })

}