'use strict';
var numberParticipants;

function showChecked() {
  document.getElementById("result").textContent = document.querySelectorAll("input:checked").length + " Selected";
  numberParticipants = document.querySelectorAll("input:checked").length;
  console.log(numberParticipants);
  // document.getElementById("oneParticipant").style.display = "none";
  // document.getElementById("twoParticipants").style.display = "none";
  // document.getElementById("fourParticipants").style.display = "none";
  if (numberParticipants === 1) {
    document.getElementById("oneParticipant").style.display = "block";
  }
  if (numberParticipants === 2) {
    document.getElementById("twoParticipants").style.display = "block";
  }
  if (numberParticipants === 4) {
    document.getElementById("fourParticipants").style.display = "block";
  }
}

