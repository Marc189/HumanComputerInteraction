var mic=false;
var vid=false;

function mic_vid(){
  if (vid){
    change2('vid');
    video();
  }
  if(mic){
    change2('mute');
    icon('muteIcon');
  }
}
function updateDiv()
{
  $("#duringCall").load(" #duringCall > *");
}
function calling(){
    document.getElementById('home').style.display="none";
    document.getElementById('calling').style.display="block";
    setTimeout("next()", 5000);


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


function change(){
  document.getElementById('back').style.display="none"
  if (document.getElementById('switch').style.display ==='none'){
    document.getElementById('switch').style.display = 'block';
    document.getElementById('switch2').style.display = 'none';
    if(document.getElementById('rec').style.display==="none") change3();
  }else {
    document.getElementById('switch2').style.display = 'block' ;
    document.getElementById('switch').style.display = 'none';
  }

}
function chat(){
  if(document.getElementById('videoElement').style.display==="inline-block"){
    video();
    vid=true;
  }
  if (document.getElementById("buttons").style.display==='block') {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('keyboard').style.display= 'block';
    document.getElementById('type').style.marginBottom='5px';
  }
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
    document.getElementById('video').style.display="block"
  }else {
    document.getElementById('back').style.display="none";
    showCall();
  }
}
function back(){
  document.getElementById('back').style.display="none"
  if(document.getElementById('buttons').style.display==='none'){
    document.getElementById('buttons').style.display='block';
    document.getElementById('keyboard').style.display='none';
    if(vid){
      video();
      vid=false;
    }
  }
  showCall();
  if (document.getElementById('participants').style.display==="block") {
    document.getElementById('participants').style.display = "none";
    document.getElementById('remote').style.display = "block";
  }
}

function showCall(){
  var main = document.getElementsByClassName('buttonmain');
  var sec = document.getElementsByClassName('buttonsec');
  if(sec[0].style.display==='none') {
    document.getElementById('call').innerHTML = "Show Call"
    for (var i = 0; i < sec.length; i++) sec[i].style.display = 'inline-block';
    for (var i = 0; i < main.length; i++) {
      main[i].style.height = '100px';
      main[i].style.width = '150px';
      main[i].style.fontSize = '24px';
      main[i].style.margin = '30px 14px';
    }
  }
}

function partis(){
  document.getElementById('participants').style.display="block";
  document.getElementById('remote').style.display="none";
  document.getElementById('back').style.display="inline-block"
}



function video(){
  var vid=document.getElementById('videoElement');
  var video = document.querySelector("#videoElement");
  if(vid.style.display==='none') {
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
    document.getElementById('type').style.width="150px";
    document.getElementById('type').style.height="30px";
    document.getElementById('type').style.marginTop="60px"
    document.getElementById('type').style.fontSize="15px";
    document.getElementById('emoji').style.width="20px"
    document.getElementById('data').style.width="20px"

  }else{
    vid.style.display='none';
    document.getElementById('type').style.width="250px";
    document.getElementById('type').style.height="50px";
    document.getElementById('type').style.fontSize="20px";
    document.getElementById('type').style.marginTop="30px"
    document.getElementById('emoji').style.width="30px"
    document.getElementById('data').style.width="30px"
  }
}
function icon(id){
  var ic=document.getElementById(id);
  if(ic.style.display==='none'){
    ic.style.display="inline-block";

  }else{
    ic.style.display='none';
  }
}

function showChecked() {
  document.getElementById("result").textContent = document.querySelectorAll("input:checked").length +" Selected";
}

function  addContact(){
  document.getElementById('add').style.display="inline-block";
  document.getElementById('addContact').style.display="none";
  document.getElementById("addName").style.display="block";
  document.getElementById("addemail").style.display="block";

}
function add() {
  var newName = document.getElementById("addName").value;
  if(newName!=="") {
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
  document.getElementById('add').style.display="none";
  document.getElementById('addContact').style.display="inline-block";
  document.getElementById("addName").style.display="none";
  document.getElementById("addemail").style.display="none";
}
function settings(){
  if(document.getElementById('sett').style.display==="block"){
    document.getElementById('sett').style.display="none";
    document.getElementById("start").style.display="block";
  }else{
    document.getElementById('sett').style.display = "block";
    document.getElementById("start").style.display = "none";
  }
}

function edit(id1,id2){
  var field=document.getElementById(id1);
  var input = document.getElementById(id2);
  if (field.style.display==="none") {
    var x=input.value;
    field.innerText=x;
    if(id="name1"){
      document.getElementById('name3').innerText=x;
    }
    field.style.display = "inline-block";
    input.style.display = "none";

  }else {
    input.value=field.innerText;
    field.style.display = "none";
    input.style.display = "inline-block";
  }
}

function logIN(){
  var user= document.getElementById('username').value;
  var pwd= document.getElementById('pwd').value;
  if(true) {
    document.getElementById('login').style.display = "none";
    document.getElementById('home').style.display = "block";
  } else document.getElementById('error').innerText="Password or Username wrong!";
}



