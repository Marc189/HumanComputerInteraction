// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBq8U_Iss38guu-VrHPPui59i6vW8uE5q8",
//   authDomain: "chatbot-2bdfe.firebaseapp.com",
//   projectId: "chatbot-2bdfe",
//   storageBucket: "chatbot-2bdfe.appspot.com",
//   messagingSenderId: "1018016749004",
//   appId: "1:1018016749004:web:c5c22320c40ac31223f969"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var myName = username;
// function sendMsg() {
//   var message = document.getElementById("message").value;
//   firebase.database().ref("message").push().set({
//     "sender": myName,
//     "message": message
//   });
//   //submitForm();
//   return false;
// }
// firebase.database().ref("message").on("child_added", function (snapshot) {
//   var html = "";
//   html += "<p>";
//
//   html += snapshot.val().sender + ": " + snapshot.val().message;
//   html += "</p>";
//
//   document.getElementById("messages").innerHTML += html;
// });
// function submitForm() {
//   // Get the first form with the name
//   // Hopefully there is only one, but there are more, select the correct index
//   var frm = document.getElementById("message");
//   frm.reset();  // Reset
//   return false; // Prevent page refresh
// }
