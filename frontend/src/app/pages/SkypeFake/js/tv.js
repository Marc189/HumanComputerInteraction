var numberParticipants;
var counter = 0;
function showChecked() {
  document.getElementById("result").textContent = document.querySelectorAll("input:checked").length +" Selected";
  numberParticipants=document.querySelectorAll("input:checked").length;
  console.log(numberParticipants);
}

function createNElemts(){
  for(var i=0; i < numberParticipants; i++)
  {
    var videoBox = document.createElement("DIV");
    videoBox.id  = 'videoBoxNr' + (++counter);
    var someEle = document.getElementById("participantsBox");
    someEle.appendChild();
  }
}
