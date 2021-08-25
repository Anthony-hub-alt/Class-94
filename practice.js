var firebaseConfig = {
    apiKey: "AIzaSyB-zxyzwDZuOKq9qnYh2q7hs5917ZEtV6Q",
    authDomain: "augustfirebase9.firebaseapp.com",
    databaseURL: "https://augustfirebase9-default-rtdb.firebaseio.com",
    projectId: "augustfirebase9",
    storageBucket: "augustfirebase9.appspot.com",
    messagingSenderId: "818122273467",
    appId: "1:818122273467:web:a4ae46816ed2ce5365af9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
user_name = document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update(
{ 
purpose : "to learn how receive and send data in firebase"
})
}