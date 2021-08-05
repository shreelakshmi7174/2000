var db = firebase.firestore();
function check()
{
   var inputtext = document.getElementById("id1").value;
   var inputtext2 = document.getElementById("id2").value;
   var inputtext3 = document.getElementById("id3").value;
   var inputtext4 = document.getElementById("id4").value;

   db.collection("Users").doc("one").set({
    username: inputtext,
    password: inputtext2,
    address:inputtext3,
    number:inputtext4
    
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

}