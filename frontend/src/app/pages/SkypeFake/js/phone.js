function change(){
  if (document.getElementById('switch').style.display ==='none'){
    document.getElementById('switch').style.display = 'block';
    document.getElementById('switch2').style.display = 'none';
  }else {
    document.getElementById('switch2').style.display = 'block' ;
    document.getElementById('switch').style.display = 'none';
  }

}
var vid=false;
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
    showCall();
  }
}
function back(){
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
    document.getElementById('call').innerHTML = "Show Call";
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
        .catch(function (err0r) {
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

