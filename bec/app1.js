var db = firebase.firestore();
function check()
{
   var inputtext = document.getElementById("id1").value;
   var inputtext2 = document.getElementById("id2").value;
   var inputtext3 = document.getElementById("id3").value;
   var inputtext4 = document.getElementById("id4").value;
   var e = document.getElementById("select1");
   var strUser = e.options[e.selectedIndex].text;
   var f = document.getElementById("select2");
   var strUser1 = f.options[f.selectedIndex].text;
   var g = document.getElementById("select3");
   var strUser2 = g.options[g.selectedIndex].text;
const now = new Date();


   db.collection("Users").doc(inputtext4).set({
    username: inputtext,
    password: inputtext2,
    address:inputtext3,
    number:inputtext4,
    hidenumber: true,
    status:"pending",
    createdAt:now,
    branch:strUser,
    year_of_pass:strUser1,
    university:strUser2




    
})
.then(() => {
    console.log("Document successfully written!");
    alert("Regitered successfully");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

}