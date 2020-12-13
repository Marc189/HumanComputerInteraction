'use strict';
var mic=false;
var vid=false;

var user=[
  ["Muster80","1234","Max Mustermann","m_muster@gmail.com","1980-10-03"],
  ["MF189","test","Marc Niemella","mfniemella@gmail.com","1999-09-18"],
  ["Trav","test","Traves Stolterfoht","travesmarlon@gmail.com","1900-01-01"]
];

var part;
var chat_=firebase.initializeApp({
  apiKey: "AIzaSyBq8U_Iss38guu-VrHPPui59i6vW8uE5q8",
  authDomain: "chatbot-2bdfe.firebaseapp.com",
  databaseURL: "https://chatbot-2bdfe-default-rtdb.firebaseio.com",
  projectId: "chatbot-2bdfe",
  storageBucket: "chatbot-2bdfe.appspot.com",
  messagingSenderId: "1018016749004",
  appId: "1:1018016749004:web:c5c22320c40ac31223f969"
});
var chat_1=firebase.initializeApp({
  apiKey: "AIzaSyDUfSVEgE_GpOegzsAfjoJuQVzq0FUtYaM",
  authDomain: "chat1-b0b4e.firebaseapp.com",
  databaseURL: "https://chat1-b0b4e-default-rtdb.firebaseio.com",
  projectId: "chat1-b0b4e",
  storageBucket: "chat1-b0b4e.appspot.com",
  messagingSenderId: "648930876414",
  appId: "1:648930876414:web:72253f720ea3cce6e0beaf",
  measurementId: "G-MDBPQ0768C"
},'chat1');
var chat_2=firebase.initializeApp({
  apiKey: "AIzaSyAdgQZ0Jfzg_chSUWw9qSkdP8x9cdHAsdM",
  authDomain: "chat2-3931c.firebaseapp.com",
  databaseURL: "https://chat2-3931c-default-rtdb.firebaseio.com",
  projectId: "chat2-3931c",
  storageBucket: "chat2-3931c.appspot.com",
  messagingSenderId: "901889439745",
  appId: "1:901889439745:web:a98c353f7e661fd11f6800"
},'chat2');
var chat_3=firebase.initializeApp({
  apiKey: "AIzaSyBtjB4rAWeGTErnop9nhy-vMYmgFhd559Q",
  authDomain: "chat3-41da8.firebaseapp.com",
  databaseURL: "https://chat3-41da8-default-rtdb.firebaseio.com",
  projectId: "chat3-41da8",
  storageBucket: "chat3-41da8.appspot.com",
  messagingSenderId: "977367316255",
  appId: "1:977367316255:web:0a025f2429302805cae22a"
},'chat3');
var chat_4=firebase.initializeApp({
  apiKey: "AIzaSyCKD1n3R0FDx2NO5kfE5GkxQmlbhXjt4WA",
  authDomain: "chat4-ced11.firebaseapp.com",
  databaseURL: "https://chat4-ced11-default-rtdb.firebaseio.com",
  projectId: "chat4-ced11",
  storageBucket: "chat4-ced11.appspot.com",
  messagingSenderId: "1064927419902",
  appId: "1:1064927419902:web:989ed2502118c2b8fd74af"
},'chat4');
var chat_5=firebase.initializeApp({
  apiKey: "AIzaSyBBzND3tpc1SE4RdZi2WLNB0C3alzeUrJI",
  authDomain: "chat5-7f173.firebaseapp.com",
  projectId: "chat5-7f173",
  storageBucket: "chat5-7f173.appspot.com",
  messagingSenderId: "538959976081",
  appId: "1:538959976081:web:6d79f00bd2ecc19d73d130",
  measurementId: "G-6Y5DXPQ5BD"
},'chat5');
var chat_6=firebase.initializeApp({
  apiKey: "AIzaSyD7xYiaH8KVqBdQknepleUsIU7Q6eM9grc",
  authDomain: "chat6-3de5f.firebaseapp.com",
  projectId: "chat6-3de5f",
  storageBucket: "chat6-3de5f.appspot.com",
  messagingSenderId: "538831549424",
  appId: "1:538831549424:web:3aaa3f41c73c7716d2a335"
},'chat6');
var chat_7=firebase.initializeApp({
  apiKey: "AIzaSyCt9Fgt15fyDXdi3bRA4bt8Q2hQ5EET-EM",
  authDomain: "chat7-fafba.firebaseapp.com",
  projectId: "chat7-fafba",
  storageBucket: "chat7-fafba.appspot.com",
  messagingSenderId: "683195094660",
  appId: "1:683195094660:web:936d476041cbf4cdbd14d1"
},'chat7');
var chat_8=firebase.initializeApp({
  apiKey: "AIzaSyAR7u8pWsCPARRTj266Zu4Bbwm5iCvBSYk",
  authDomain: "chat8-58a41.firebaseapp.com",
  projectId: "chat8-58a41",
  storageBucket: "chat8-58a41.appspot.com",
  messagingSenderId: "1016569873599",
  appId: "1:1016569873599:web:e79c3c6f13170448da320a"
},'chat8');
var fire=chat_;

var numPart;


function init(){
  fire.database().ref("message").on("child_added", function (snapshot) {
    var html = "";
    html += "<p>";

    html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</p>";

    document.getElementById("messages").innerHTML += html;
  });
}


function init2(){
  fire.database().ref("message").on("child_added", function (snapshot) {
    var html = "";
    html += "<p>";

    html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</p>";

    document.getElementById('messages2').innerHTML += html
  });
}


function sendMsgGroup() {
  var myName = document.getElementById('uname').innerText;
  var message = document.getElementById("type").value;
  document.getElementById('type').value="";
  fire.database().ref("message").push().set({
    "sender": myName,
    "message": message
  });
  scrollToBottom('messages');
  return false;
}

function sendMsgSingle() {
  var myName = document.getElementById('uname').innerText;
  var message = document.getElementById("type2").value;
  document.getElementById('type2').value="";
  fire.database().ref("message").push().set({
    "sender": myName,
    "message": message
  });
  scrollToBottom('messages2');
  return false;
}

function selectchat(name){
  switch (name) {
    case 'Marc Niemella':
      fire=chat_1;
      break;
    case 'Mar Clerencia':
      fire=chat_2;
      break;
    case 'Moritz Schelten':
      fire=chat_3;
      break;
    case 'Izar Capel':
      fire=chat_4;
      break;
    case 'Facu Nunez':
      fire=chat_5;
      break;
    case 'Carmen Ruiz':
      fire=chat_6;
      break;
    case 'Marina Gonzalez':
      fire=chat_7;
      break;
    case 'Elon Musk':
      fire=chat_8;
      break;
    case 'Group':
      fire=chat_;
  }
  return fire;
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
  $("#messages").load(" #messages > *");
  numPart=document.querySelectorAll("input:checked").length;
  if(numPart>0){
    part=document.querySelectorAll("input:checked");
    var str;
    if(part.length===1){
      str="Calling "+part[0].value+"...";
      selectchat(part[0].value);
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
        selectchat('Group');
      }
    }
    init();
    document.getElementById("names").innerText=str;
    document.getElementById('home').style.display="none";
    document.getElementById('calling').style.display="block";
    setTimeout("next()", 500);
    mic_vid();
  }
}

function next(){
  if (document.getElementById('calling').style.display==="block"){
    document.getElementById('duringCall').style.display="block";
    document.getElementById('calling').style.display="none"
  }
}

function home() {
  updateDiv()
  document.getElementById('calling').style.display="none";
  document.getElementById('duringCall').style.display="none";
  document.getElementById('home').style.display="block";
}

var drgd=false;
var tv;
var wall;
function change(){
  document.getElementById('back').style.display="none";

  if (document.getElementById('switch').style.display ==='none'){
    document.getElementById('switch').style.display = 'block';
    document.getElementById('switch2').style.display = 'none';
    tv=window.open("tv.html", "", "width=1453,height=896");
    wall=window.open("wall.html", "", "width=1453,height=431");
    wall.myVariable = fire;

    tv.numP = numPart;
    if(document.getElementById('rec').style.display==="none") change3();
  }else {
    tv.close();
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
  scrollToBottom('messages');
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
    document.getElementById('chat2').style.height="372px";
  }
  else{
    document.getElementById('group').style.display="block";
    document.getElementById('chat2').style.height="351px";
    document.getElementById('name6').style.display= 'none';
  }
}
function scrollToBottom (id) {
  var div = document.getElementById(id);
  div.scrollTop = 10000000000000000;
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
  $("#messages2").load(" #messages2 > *");
  document.getElementById('parti').style.display= 'none';
  document.getElementById('chat3').style.display= 'block';
  document.getElementById('nam').innerText=name;
  document.getElementById('send2').style.display= 'inline-block';
  document.getElementById('type2').style.width= '200px';
  selectchat(name);
  init2();
  setTimeout("scrollToBottom('messages2')",1000);
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
    showVideos()

  }else {
    document.getElementById('back').style.display="none";
    showCall();
  }
}

function showVideos() {
    if (numPart === 1) {
      document.getElementById('vi').innerHTML =
        "<div id=\"one\" style=\"padding: 50px 0;position: relative\">\n" +
        "  <video id='one1' width=\"360\">\n" +
        "    <source src=\"media/izar.mp4\">\n" +
        "  </video>\n" +
        "  <div style='position: absolute;top: 50px;left: 10px'>"+part[0].value+"</div>"+
        "</div>";
      document.getElementById("one1").play();
    }
    if (numPart === 2) {
      document.getElementById('vi').innerHTML =
        "          <div id=\"two\" style=\"padding: 5px 15px;position: relative\">\n" +
        "            <video id='two1' width=\"330\">\n" +
        "              <source src=\"media/marina.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 5px;left: 20px'>"+part[0].value+"</div>"+
        "            <video id='two2' width=\"330\">\n" +
        "              <source src=\"media/mar.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 195px;left: 20px'>"+part[1].value+"</div>"+
        "          </div>"
      document.getElementById("two1").play();
      setTimeout(function () {
        document.getElementById("two2").play();
      }, 12000);
    }
    if (numPart === 3) {
      document.getElementById('vi').innerHTML =
        "          <div id=\"three\" style=\"padding: 20px 80px;position: relative\">\n" +
        "            <video id='three1' width=\"200\">\n" +
        "              <source src=\"media/marina.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 20px;left: 85px'>"+part[0].value+"</div>"+
        "            <video id='three2' width=\"200\">\n" +
        "              <source src=\"media/mar.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 135px;left: 85px'>"+part[1].value+"</div>"+
        "            <video id='three3' width=\"200\">\n" +
        "              <source src=\"media/carmen.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 250px;left: 85px'>"+part[2].value+"</div>"+
        "          </div>"
      document.getElementById("three1").play();
      setTimeout(function () {
        document.getElementById("three2").play();
      }, 12000);
      setTimeout(function () {
        document.getElementById("three3").play();
      }, 22000);

    }
    if (numPart === 4) {
      document.getElementById('vi').innerHTML =
        "          <div id=\"four\" style=\"padding: 50px 3px;position: relative\">\n" +
        "            <video id='four1' width=\"175\">\n" +
        "              <source src=\"media/marina.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 50px;left: 5px'>"+part[0].value+"</div>"+
        "            <video id='four2' width=\"175\">\n" +
        "              <source src=\"media/mar.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 50px;left: 185px'>"+part[1].value+"</div>"+
        "            <video id='four3' width=\"175\">\n" +
        "              <source src=\"media/carmen.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 150px;left: 5px'>"+part[2].value+"</div>"+
        "            <video id='four4' width=\"175\">\n" +
        "              <source src=\"media/faku.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 150px;left: 185px'>"+part[3].value+"</div>"+
        "          </div>"
      document.getElementById("four1").play();
      setTimeout(function () {
        document.getElementById("four2").play();
      }, 12000);
      setTimeout(function () {
        document.getElementById("four3").play();
      }, 22000);
      setTimeout(function () {
        document.getElementById("four4").play();
      }, 26000);
    }
    if (numPart === 5) {
      document.getElementById('vi').innerHTML =
        "          <div id=\"five\" style=\"padding: 50px 3px;position: relative\">\n" +
        "            <video id='five1' width=\"175\">\n" +
        "              <source src=\"media/marina.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 50px;left: 5px'>"+part[0].value+"</div>"+
        "            <video id='five2' width=\"175\">\n" +
        "              <source src=\"media/mar.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 50px;left: 185px'>"+part[1].value+"</div>"+
        "            <video id='five3' width=\"175\">\n" +
        "              <source src=\"media/carmen.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 150px;left: 5px'>"+part[2].value+"</div>"+
        "            <video id='five4' width=\"175\">\n" +
        "              <source src=\"media/faku.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 150px;left: 185px'>"+part[3].value+"</div>"+
        "            <video id='five5' style=\"margin: 0 90px\" width=\"175\">\n" +
        "              <source src=\"media/moritz.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 255px;left: 95px'>"+part[4].value+"</div>"+
        "          </div>"
      document.getElementById("five1").play();
      setTimeout(function () {
        document.getElementById("five2").play();
      }, 12000);
      setTimeout(function () {
        document.getElementById("five3").play();
      }, 22000);
      setTimeout(function () {
        document.getElementById("five4").play();
      }, 26000);
      setTimeout(function () {
        document.getElementById("five5").play();
      }, 35000);

    }
    if (numPart === 6) {
      document.getElementById('vi').innerHTML =
        "          <div id=\"six\" style=\"padding: 30px 3px;position: relative\">\n" +
        "            <video id='six1' width=\"175\">\n" +
        "              <source src=\"media/marina.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 30px;left: 5px'>"+part[0].value+"</div>"+
        "            <video id='six2' width=\"175\">\n" +
        "              <source src=\"media/izar.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 30px;left: 185px'>"+part[5].value+"</div>"+
        "            <video id='six3' width=\"175\">\n" +
        "              <source src=\"media/mar.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 130px;left: 5px'>"+part[1].value+"</div>"+
        "            <video id='six4' width=\"175\">\n" +
        "              <source src=\"media/carmen.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 130px;left: 185px'>"+part[2].value+"</div>"+
        "            <video id='six5' width=\"175\">\n" +
        "              <source src=\"media/faku.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 235px;left: 5px'>"+part[3].value+"</div>"+
        "            <video id='six6' width=\"175\">\n" +
        "              <source src=\"media/moritz.mp4\">\n" +
        "            </video>\n" +
        "            <div style='position: absolute;top: 235px;left: 185px'>"+part[4].value+"</div>"+
        "          </div>"
      document.getElementById("six1").play();
      setTimeout(function () {
        document.getElementById("six2").play();
      }, 12000);
      setTimeout(function () {
        document.getElementById("six3").play();
      }, 18000);
      setTimeout(function () {
        document.getElementById("six4").play();
      }, 28000);
      setTimeout(function () {
        document.getElementById("six5").play();
      }, 32000);
      setTimeout(function () {
        document.getElementById("six6").play();
      }, 41000);
    }
    if (numPart === 7) {
      document.getElementById('vi').innerHTML =
        "    <div id=\"seven\" style=\"padding: 5px 18px;position: relative\">\n" +
        "      <video id='seven1' width=\"160\">\n" +
        "        <source src=\"media/marina.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 5px;left: 20px'>"+part[0].value+"</div>"+
        "      <video id='seven2' width=\"160\">\n" +
        "        <source src=\"media/izar.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 5px;left: 185px'>"+part[5].value+"</div>"+
        "      <video id='seven3' width=\"160\">\n" +
        "        <source src=\"media/mar.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 100px;left: 20px'>"+part[1].value+"</div>"+
        "      <video id='seven4' width=\"160\">\n" +
        "        <source src=\"media/carmen.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 100px;left: 185px'>"+part[2].value+"</div>"+
        "      <video id='seven5' width=\"160\">\n" +
        "        <source src=\"media/faku.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 190px;left: 20px'>"+part[3].value+"</div>"+
        "      <video id='seven6' width=\"160\">\n" +
        "        <source src=\"media/moritz.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 190px;left: 185px'>"+part[4].value+"</div>"+
        "      <video id='seven7' style=\"margin: 0 82px\" width=\"160\">\n" +
        "        <source src=\"media/carmenBeingCarmen.mp4\">\n" +
        "      </video>\n" +
        "            <div style='position: absolute;top: 285px;left: 105px'>"+part[6].value+"</div>"+
        "    </div>"
      document.getElementById("seven1").play();
      setTimeout(function () {
        document.getElementById("seven2").play();
      }, 12000);
      setTimeout(function () {
        document.getElementById("seven3").play();
      }, 18000);
      setTimeout(function () {
        document.getElementById("seven4").play();
      }, 28000);
      setTimeout(function () {
        document.getElementById("seven5").play();
      }, 32000);
      setTimeout(function () {
        document.getElementById("seven6").play();
      }, 41000);
      setTimeout(function () {
        document.getElementById("seven7").play();
      }, 45000);
    }
}


function back(){
  if(document.getElementById('vi').style.display==='block'||document.getElementById('chat2').style.display=== 'block'){
    if(document.getElementById('chat2').style.display=== 'block')document.getElementById('type').style.width= '250px';
    document.getElementById('back').style.display="none";
    document.getElementById('buttons').style.display='block';
    document.getElementById('keyboard').style.display='none';
    document.getElementById('em').style.display='none';
    document.getElementById('dat').style.display='none';
    document.getElementById('chat2').style.display= 'none';
    document.getElementById('send').style.display= 'none';
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
    $("#vi").load(" #vi > *");
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
