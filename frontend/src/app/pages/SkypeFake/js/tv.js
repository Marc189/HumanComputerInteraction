'use strict';
function showCheckedd() {
  console.log(num);
  if (window.num === 1) {
    document.getElementById("oneParticipant").style.display = "block";
    document.getElementById("twoParticipants").style.display = "none";
    document.getElementById("fourParticipants").style.display = "none";
  }
  if (window.num === 2) {
    document.getElementById("twoParticipants").style.display = "block";
  }
  if (window.num === 4) {
    document.getElementById("fourParticipants").style.display = "block";
  }
  if (window.num === 6) {
    document.getElementById("sixParticipants").style.display = "block";
  }
}

