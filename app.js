const modalBtn = document.querySelector(".hero__submit");
const modalBg = document.querySelector(".modal");

// launch modal
modalBtn.addEventListener('click', function() {
    modalBg.classList.add("bg-active");
})