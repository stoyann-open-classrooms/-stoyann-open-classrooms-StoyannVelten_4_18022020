function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close =document.querySelector(".close");
const name = document.querySelector('.formData:nth-child(1) input');
const lastName = document.querySelector('.formData:nth-child(2) input');
const Mail = document.querySelector('.formData:nth-child(3) input');
const dateOfBirth = document.querySelector('.formData:nth-child(4) input');
const tournement =  document.querySelector('.formData:nth-child(5) input');
const city =  document.querySelector('.formData:nth-child(6) input');
const conditions =  document.querySelector('.formData:nth-child(7) input');


close.addEventListener('click', closeModal);


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

