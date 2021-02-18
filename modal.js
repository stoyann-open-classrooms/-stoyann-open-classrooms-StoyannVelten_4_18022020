function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector('.form-user');
let tableauResults = [];
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close =document.querySelector(".close");
const nameUser= document.querySelector('.formData:nth-child(1) input');
const lastName = document.querySelector('.formData:nth-child(2) input');
const inpMail = document.querySelector('.formData:nth-child(3) input');
const dateOfBirth = document.querySelector('.formData:nth-child(4) input');
const tournement =  document.querySelector('.formData:nth-child(5) input');
const city =  document.querySelector('.formData:nth-child(6) input');
const conditions =  document.querySelector('.formData:nth-child(7) input');
const alert = document.querySelectorAll('.message-alert');


// soumission du form
form.addEventListener ('submit', (e) => {
  e.preventDefault();
   
})








// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
close.addEventListener('click', (closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}






























 
 
 
 
 
 


