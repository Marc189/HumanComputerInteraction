<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBq8U_Iss38guu-VrHPPui59i6vW8uE5q8",
    authDomain: "chatbot-2bdfe.firebaseapp.com",
    projectId: "chatbot-2bdfe",
    storageBucket: "chatbot-2bdfe.appspot.com",
    messagingSenderId: "1018016749004",
    appId: "1:1018016749004:web:c5c22320c40ac31223f969"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var myName = prompt("Enter your name");
  function sendMsg() {
    var message = document.getElementById("message").value;
    firebase.database().ref("messages").push().set({
      "sender": myName,
      "message": message
    });
    return false;
  }
</script>
<form onsubmit="return sendMsg();">
  <input id="message" placeholder="Enter massage">

  <input type="submit">
</form>

