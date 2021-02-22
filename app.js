
const form = document.querySelector(".modal__form");
const radio = document.querySelector(".modal__radio");
let tableauResultat = [];
const inpUtilisateurFirst = document.querySelector('#first');
const inpUtilisateurLast = document.querySelector('#last')
const inpUMail = document.querySelector('#email');
const inpCheckBox = document.querySelectorAll(".checkbox-input");
const closeModale = document.querySelector(".modal__close");
const errorInp = document.querySelectorAll(".modal__error");
const modale =document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn");
const error = document.querySelectorAll(".modal__error");


// animation de la nav

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    


//    toggle nav
   burger.addEventListener("click", () => {
        nav.classList.toggle('nav__active');
    });  

}
navSlide();




// ouvrir la modale
modalBtn.addEventListener("click", () => {
    modale.style.display="block"
});

// fermer la modale


closeModale.addEventListener("click", () => {
    modale.style.display="none"
});


// recuperation des données dans un tableau 

form.addEventListener('submit',(e) => {
    e.preventDefault();
    for(i= 1 ; i < 6; i++ ) {
        tableauResultat.push(document.querySelector(`input[name = "area${i}"]`).value);
    };
   
    console.log(tableauResultat);
    tableauResultat = [];

})













 
 
 
 













