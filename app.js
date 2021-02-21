
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    


//    toggle nav
   burger.addEventListener("click", () => {
        nav.classList.toggle('nav__active');
    });  

}
navSlide();










