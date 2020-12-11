var numberParticipants;
function showChecked() {
  document.getElementById("result").textContent = document.querySelectorAll("input:checked").length +" Selected";
  numberParticipants=document.querySelectorAll("input:checked").length;
  console.log(numberParticipants);
  if(numberParticipants===1){
    document.getElementById("oneParticipant").style.display="block";
  }
}

