

const inpUtilisateurFirst = document.querySelector('#first');
const inpUtilisateurLast = document.querySelector('#last')
const inpUMail = document.querySelector('#email');
const inpCheckBox = document.querySelectorAll(".checkbox-input");
const closeModale = document.querySelector(".modal__close");
const errorInp = document.querySelectorAll(".modal__error");
const modale =document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn")



// ouvrir la modale
modalBtn.addEventListener("click", () => {
    modale.style.display="block"
})

// validation prenom

inpUtilisateurFirst.addEventListener('input', (e) =>{

    if(e.target.value.lenght >= 2){
        errorInp[0].style.display="none";
    }
    else{
        errorInp[0].style.display="inline";

    }

})

// validation prenom

inpUtilisateurLast.addEventListener('input', (e) =>{

    if(e.target.value.lenght >= 2){
        errorInp[1].style.display="none";
    }
    else{
        errorInp[1].style.display="inline";

    }

})

// validation Mail


inpUMail.addEventListener('input', (e) => {
   
    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail)=== 0){
        errorInp[2].style.display="none";

    } else if (e.target.value.search(regexEmail)=== -1){
        errorInp[2].style.display="inline";
    }

})




// fermer la modale


closeModale.addEventListener("click", () => {
    modale.style.display="none"
})










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










