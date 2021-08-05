var db = firebase.firestore();
function validate1()
{

DatabaseReference ref = FirebaseDatabase.getInstance().getReference();
ref.child("Users").child("username").addListenerForSingleValueEvent(new ValueEventListener() {
  @Override
  public void onDataChange(DataSnapshot dataSnapshot) {
     if(dataSnapshot.exists()){
      // use "username" already exists
      // Let the user know he needs to pick another username.
      console.log("Document successfully writtennn!");
    } else {
      // User does not exist. NOW call createUserWithEmailAndPassword
      mAuth.createUserWithPassword(...);
      // Your previous code here.

    }                               
  }

  @Override
  public void onCancelled(DatabaseError databaseError) {

  }
});

}