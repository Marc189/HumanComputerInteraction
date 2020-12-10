'use strict';
var mic=false;
var vid=false;

var user=[
  ["Muster80","1234","Max Mustermann","m_muster@gmail.com","1980-10-03"],
  ["MF189","test","Marc Niemella","mfniemella@gmail.com","1999-09-18"],
  ["Trav","test","Traves Stolterfoht","travesmarlon@gmail.com","1900-01-01"]
];

var part;

function chatbot(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUfSVEgE_GpOegzsAfjoJuQVzq0FUtYaM",
    authDomain: "chat1-b0b4e.firebaseapp.com",
    databaseURL: "https://chat1-b0b4e-default-rtdb.firebaseio.com",
    projectId: "chat1-b0b4e",
    storageBucket: "chat1-b0b4e.appspot.com",
    messagingSenderId: "648930876414",
    appId: "1:648930876414:web:72253f720ea3cce6e0beaf",
    measurementId: "G-MDBPQ0768C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  init();

}

function init(){
  firebase.database().ref("message").on("child_added", function (snapshot) {
    var html = "";
    html += "<p>";

    html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</p>";

    document.getElementById("messages").innerHTML += html;
  });
}


function sendMsgSingle() {
  var myName = document.getElementById('uname').innerText;
  var message = document.getElementById("type").value;
  document.getElementById('type').value="";
  firebase.database().ref("message").push().set({
    "sender": myName,
    "message": message
  });
  return false;
}



function loaduser(){
  $.ajax({
    url: 'user.csv',
    dataType: 'text',
  }).done(successFunction);
}

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {
    var rowCells = allRows[singleRow].split(',');
    var us=[];
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      us.push(rowCells[rowCell]);
    }
    user.push(us)
  }
}



function mic_vid(){
  if (vid){
    change2('vid');
    video();
  }
  if(!mic){
    change2('mute');
    icon('muteIcon');
  }
}
function updateDiv()
{
  $("#duringCall").load(" #duringCall > *");
  $("#calling").load(" #calling > *");
}


function calling(){
  if(document.querySelectorAll("input:checked").length>0){
    part=document.querySelectorAll("input:checked");
    var str;
    if(part.length===1){
      str="Calling "+part[0].value+"...";
    }
    else{
      str="Calling Group.."
      document.getElementById('pic').style.display="none";
      for(var i=0;i<part.length;i++){
        var div=document.createElement("div");
        div.setAttribute("style","display: inline-block;height: 140px ;width: 130px")
        div.innerHTML= "<img src=\"media/hiclipart.com.png\" style=\"height: 100px;display: inline-block \">";
        var div2= document.createElement("div");
        div2.innerText=part[i].value;
        div.appendChild(div2);
        document.getElementById('pict').appendChild(div);
      }
    }
    document.getElementById("names").innerText=str;
    document.getElementById('home').style.display="none";
    document.getElementById('calling').style.display="block";
    setTimeout("next()", 500);
    mic_vid();
    init();
  }
}

function next(){
  if (document.getElementById('calling').style.display==="block"){
    document.getElementById('duringCall').style.display="block";
    document.getElementById('calling').style.display="none"
    //document.getElementById('video').play();
  }
}

function home() {
  updateDiv()
  document.getElementById('calling').style.display="none";
  document.getElementById('duringCall').style.display="none";
  document.getElementById('home').style.display="block";
}


var tv;
var wall;
function change(){
  document.getElementById('back').style.display="none"

  if (document.getElementById('switch').style.display ==='none'){
    document.getElementById('switch').style.display = 'block';
    document.getElementById('switch2').style.display = 'none';
    tv=window.open("tv.html", "", "width=1453,height=896");
    wall=window.open("wall.html", "", "width=1453,height=431");
    if(document.getElementById('rec').style.display==="none") change3();
  }else {
    tv.close()
    wall.close();
    document.getElementById('switch2').style.display = 'block' ;
    document.getElementById('switch').style.display = 'none';
  }
}
function chat(type){
  if(document.getElementById('videoElement').style.display==="inline-block"){
    video();
    vid=true;
  }
  document.getElementById('buttons').style.display = 'none';
  document.getElementById('vi').style.display="none";
  document.getElementById('back').style.display= 'inline-block';
  document.getElementById('chat2').style.display= 'block';
  document.getElementById('type').style.marginBottom='5px';
  switch (type){
    case "emoji":
      document.getElementById('em').style.display= 'block';
      document.getElementById('keyboard').style.display= 'none';
      document.getElementById('dat').style.display= 'none';
      document.getElementById('send').style.display= 'inline-block';
      document.getElementById('type').style.width= '200px';
      break;
    case "text":
      document.getElementById('keyboard').style.display= 'block';
      document.getElementById('em').style.display= 'none';
      document.getElementById('dat').style.display= 'none';
      document.getElementById('send').style.display= 'inline-block';
      document.getElementById('type').style.width= '200px';
      break;
    case "data":
      document.getElementById('dat').style.display= 'block';
      document.getElementById('keyboard').style.display= 'none';
      document.getElementById('em').style.display= 'none';
      document.getElementById('send').style.display= 'none';
      document.getElementById('type').style.width= '250px';
      break;
  }
  if(document.querySelectorAll("input:checked").length===1){
    document.getElementById('group').style.display="none";
    document.getElementById('name6').style.display= 'block';
    document.getElementById('name5').innerText=part[0].value;
    document.getElementById('messages').style.height="310px";
  }
  else{
    document.getElementById('group').style.display="block";
    document.getElementById('messages').style.height="330px";
    document.getElementById('name6').style.display= 'none';
  }
}

function change4(type){
  switch (type){
    case "emoji":
      document.getElementById('em2').style.display= 'block';
      document.getElementById('keyboard4').style.display= 'none';
      document.getElementById('dat2').style.display= 'none';
      document.getElementById('send2').style.display= 'inline-block';
      document.getElementById('type2').style.width= '200px';
      break;
    case "text":
      document.getElementById('keyboard4').style.display= 'block';
      document.getElementById('em2').style.display= 'none';
      document.getElementById('dat2').style.display= 'none';
      document.getElementById('send2').style.display= 'inline-block';
      document.getElementById('type2').style.width= '200px';
      break;
    case "data":
      document.getElementById('dat2').style.display= 'block';
      document.getElementById('keyboard4').style.display= 'none';
      document.getElementById('em2').style.display= 'none';
      document.getElementById('send2').style.display= 'none';
      document.getElementById('type2').style.width= '250px';
      break;
  }

}

function chat2(name){
  document.getElementById('parti').style.display= 'none';
  document.getElementById('chat3').style.display= 'block';
  document.getElementById('nam').innerText=name;
  document.getElementById('send2').style.display= 'inline-block';
  document.getElementById('type2').style.width= '200px';

}
function change2(id){
  var butt=document.getElementById(id);
  if(butt.innerHTML==="Mute"||butt.innerHTML==="Record Screen"||butt.innerHTML==="Share Screen"||butt.innerHTML==="Video On") {
    if(id==='vid'||id==='vid2'){
      butt.style.backgroundColor = 'deepskyblue';
      butt.onmouseover = function (){ butt.style.backgroundColor='dodgerblue'}
      butt.onmouseleave = function (){ butt.style.backgroundColor='deepskyblue'}
    }else{
      butt.style.backgroundColor = 'red';
      butt.onmouseover = function (){ butt.style.backgroundColor='darkred'}
      butt.onmouseleave = function (){ butt.style.backgroundColor='red'}
    }
    switch (id) {
      case "mute":
        butt.innerHTML = "Unmute";
        break;
      case "mute2":
        butt.innerHTML = "Unmute";
        break;
      case "rec":
        butt.innerHTML= "Stop Recording";
        break;
      case "share":
        butt.innerHTML="Stop Sharing";
        break;
      case "vid":
        butt.innerHTML="Video Off";
        break;
      case "vid2":
        butt.innerHTML="Video Off";
        break;
    }
  }else{
    butt.style.backgroundColor= 'darkgray';
    butt.onmouseover = function (){ butt.style.backgroundColor='#666666'}
    butt.onmouseleave = function (){ butt.style.backgroundColor='darkgray'}
    switch (id) {
      case "mute":
        butt.innerHTML = "Mute";
        break;
      case "mute2":
        butt.innerHTML = "Mute";
        break;
      case "rec":
        butt.innerHTML= "Record Screen";
        break;
      case "share":
        butt.innerHTML="Share Screen";
        break;
      case "vid":
        butt.innerHTML="Video On";
        break;
      case "vid2":
        butt.innerHTML="Video On";
        break;
    }
  }

}
function change3(){
  var sec = document.getElementsByClassName('buttonsec');
  var main = document.getElementsByClassName('buttonmain');
  if(document.getElementById('call').innerHTML==="Show Call"){
    document.getElementById('back').style.display="inline-block"
    document.getElementById('call').innerHTML="Remote";
    for(var i=0;i<sec.length;i++) sec[i].style.display='none';
    for(var i=0;i<main.length;i++){
      main[i].style.height='70px';
      main[i].style.width='110px';
      main[i].style.fontSize= '18px';
      main[i].style.margin= '20px 3px';
    }
    document.getElementById('hang').style.marginLeft='5px';
    document.getElementById('vi').style.display="block";

  }else {
    document.getElementById('back').style.display="none";
    showCall();
  }
}
function back(){
  if(document.getElementById('vi').style.display==='block'||document.getElementById('chat2').style.display=== 'block'){
    document.getElementById('back').style.display="none";
    document.getElementById('buttons').style.display='block';
    document.getElementById('keyboard').style.display='none';
    document.getElementById('em').style.display='none';
    document.getElementById('dat').style.display='none';
    document.getElementById('chat2').style.display= 'none';
    document.getElementById('send').style.display= 'none';
    document.getElementById('type').style.width= '250px';
    if(vid){
      video();
      vid=false;
    }
  }
  showCall();
  if (document.getElementById('participants').style.display==="block") {
    if(document.getElementById('chat3').style.display=== 'block'){
      document.getElementById('chat3').style.display= 'none';
      document.getElementById('parti').style.display= 'block';
    }else {
      document.getElementById('back').style.display="none";
      document.getElementById('participants').style.display = "none";
      document.getElementById('remote').style.display = "block";
    }
  }
}

function showCall() {
  var main = document.getElementsByClassName('buttonmain');
  var sec = document.getElementsByClassName('buttonsec');
  if (sec[0].style.display === 'none') {
    document.getElementById('call').innerHTML = "Show Call"
    for (var i = 0; i < sec.length; i++) sec[i].style.display = 'inline-block';
    for (var i = 0; i < main.length; i++) {
      main[i].style.height = '100px';
      main[i].style.width = '150px';
      main[i].style.fontSize = '24px';
      main[i].style.margin = '30px 14px';
      document.getElementById('vi').style.display = "none";
    }
  }
}

function partis() {
  document.getElementById('participants').style.display = "block";
  document.getElementById('remote').style.display = "none";
  document.getElementById('back').style.display = "inline-block"
  var p="";
  for(var i=0;i<part.length;i++){
    p+= "          <hr>\n" +
      "          <div class=\"personSingle\">\n" +
      "            <img src=\"media/hiclipart.com.png\" class=\"profilePic\" alt=\"Image\" width=\"40\">\n" +
      "            <div class=\"nameParticipant\">"+ part[i].value +"</div>\n" +
      "            <img src=\"media/clipart2499993.png\" class=\"chatIconRight\" alt=\"Image\" width=\"30\" onclick=\"chat2('"+part[i].value+"')\" >\n" +
      "          </div>\n";
  }
  p+="<hr>";
  document.getElementById('p').innerHTML=p;
}


function video() {
  var vid = document.getElementById('videoElement');
  var video = document.querySelector("#videoElement");
  if (vid.style.display === 'none') {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function () {
          console.log("Something went wrong!");
        });
    }
    vid.style.display = 'inline-block';
    document.getElementById('type').style.width = "150px";
    document.getElementById('type').style.height = "30px";
    document.getElementById('type').style.marginTop = "60px"
    document.getElementById('type').style.fontSize = "15px";
    document.getElementById('emoji').style.width = "20px"
    document.getElementById('data').style.width = "20px"

  } else {
    vid.style.display = 'none';
    document.getElementById('type').style.width = "250px";
    document.getElementById('type').style.height = "50px";
    document.getElementById('type').style.fontSize = "20px";
    document.getElementById('type').style.marginTop = "30px"
    document.getElementById('emoji').style.width = "30px"
    document.getElementById('data').style.width = "30px"
  }
}

function icon(id) {
  var ic = document.getElementById(id);
  if (ic.style.display === 'none') {
    ic.style.display = "inline-block";

  } else {
    ic.style.display = 'none';
  }
}

function showChecked() {
  document.getElementById("result").innerText = document.querySelectorAll("input:checked").length + " Selected";
}

function addContact() {
  document.getElementById('add').style.display = "inline-block";
  document.getElementById('addContact').style.display = "none";
  document.getElementById("addName").style.display = "block";
  document.getElementById("addemail").style.display = "block";

}

function add() {
  var newName = document.getElementById("addName").value;
  if (newName !== "") {
    var nodeCheck = document.createElement("INPUT");
    nodeCheck.type = "checkbox";
    nodeCheck.setAttribute("class", "person");
    var nodeLabel = document.createElement("LABEL");
    var textnode = document.createTextNode(newName);
    nodeCheck.appendChild(textnode);
    nodeLabel.appendChild(textnode)
    document.getElementById("checkbox").appendChild(nodeCheck);
    document.getElementById("checkbox").appendChild(nodeLabel);
  }
  document.getElementById('add').style.display = "none";
  document.getElementById('addContact').style.display = "inline-block";
  document.getElementById("addName").style.display = "none";
  document.getElementById("addemail").style.display = "none";
}

function settings() {
  if (document.getElementById('sett').style.display === "block") {
    document.getElementById('sett').style.display = "none";
    document.getElementById("start").style.display = "block";
  } else {
    document.getElementById('sett').style.display = "block";
    document.getElementById("start").style.display = "none";
  }
}

function edit(id1, id2) {
  var field = document.getElementById(id1);
  var input = document.getElementById(id2);
  var user= document.getElementById("name").innerText;
  if (field.style.display === "none") {
    var x = input.value;
    field.innerText = x;
    if (id1 === "name") {
      document.getElementById('name3').innerText = x;
    }
    field.style.display = "inline-block";
    input.style.display = "none";
    document.getElementById('set').style.display = "block";
    document.getElementById('keyboard3').style.display = "none";
    document.getElementById('line').style.marginBottom = "20px";
    changeuser(user);

  } else {
    input.value = field.innerText;
    field.style.display = "none";
    input.style.display = "inline-block";
    document.getElementById('set').style.display = "none";
    document.getElementById('keyboard3').style.display = "block";
    document.getElementById('line').style.marginBottom = "65px";
  }
}

function changeuser(name){
  for (var i=0;i<user.length;i++) {
    if (user[i][2] === name) {
      user[i][2]=document.getElementById('name').innerText;
      user[i][3]=document.getElementById('mail').innerText;
      user[i][4]=document.getElementById('date').value;
    }
  }
  console.log(user);
}

function logIN() {
  var usr = document.getElementById('username').value;
  var pwd = document.getElementById('pwd').value;
  var pwd2;
  for (var i=0;i<user.length;i++){
    if(user[i][0]===usr){
      pwd2=user[i][1];
      document.getElementById('name3').innerText=user[i][2];
      document.getElementById('name').innerText=user[i][2];
      document.getElementById('uname').innerText=user[i][0];
      document.getElementById('mail').innerText=user[i][3];
      document.getElementById('date').value=user[i][4];
    }
  }
  //if (pwd2===pwd) {
  if (true) {
    document.getElementById('login').style.display = "none";
    document.getElementById('home').style.display = "block";
    changeContacts();
    keyhide();
    if(document.getElementById('uname').innerText==="Muster80"){
      setTimeout("marcCalls()", 5000);
    }
  } else document.getElementById('error').innerText = "Password or Username wrong!";
}

function marcCalls(){
  document.getElementById("names").innerText="Marc Niemella is calling";
  document.getElementById('home').style.display="none";
  document.getElementById('calling').style.display="block";
  document.getElementById('accept').style.display="inline-block";
  document.getElementById('hang2').style.width="150px";
  document.getElementById('hang2').style.margin="0";
  document.getElementById('person5').checked=true;
  part=document.querySelectorAll("input:checked");
  mic_vid();
}

function logout(){
  document.getElementById('login').style.display = "block";
  document.getElementById('home').style.display = "none";
}

function changeContacts(){
  var cont=document.getElementsByClassName('person');
  for(var i=0;i<cont.length;i++){
    if (cont[i].value===document.getElementById('name').innerText){
      cont[i].value="Elon Musk";
      document.querySelector("label[for='" + cont[i].id + "']").innerText="Elon Musk";
    }
  }
}


function signin() {
  document.getElementById("lo").style.display = "none";
  document.getElementById("s").style.display = "none";
  document.getElementById("back2").style.display = "block";
  document.getElementById("sig").style.display = "block";
  keyhide();

}
function sign() {
  var uname = document.getElementById("username2").value;
  var pwd = document.getElementById("pwd2").value;
  var name = document.getElementById("name4").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date2").value;
  if (uname === "" || pwd === "" || name === "" || email === "" || date === "") {
    document.getElementById("error2").innerText = "Something is missing!";
  } else {
    user.push([uname,pwd,name,email,date]);
    // var data= uname+","+pwd+","+name+","+email+","+date
    // var xhttp = new XMLHttpRequest();
    // xhttp.onload = function () {
    //   if (xhttp.readyState === 4 && xhttp.status === 200) {
    //     console.log(this.responseText);
    //   }
    // };
    // xhttp.open('POST','Writer');
    // xhttp.send(data);
    back3();
  }
}

function back3() {
  document.getElementById("lo").style.display = "block";
  document.getElementById("s").style.display = "block";
  document.getElementById("back2").style.display = "none";
  document.getElementById("sig").style.display = "none";
  document.getElementById("error2").innerText = "";
  keyhide();
}

function keyshow() {
  document.getElementById('keyboard2').style.display = "block";
  document.getElementById('lo').style.height = "250px";
}

function keyhide() {
  document.getElementById('keyboard2').style.display = "none";
  document.getElementById('lo').style.height = "450px";
}
