const hamMenu = document.querySelector(".hamMenu");
const offHamMenu = document.querySelector(".offHamMenu");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offHamMenu.classList.toggle('active');
});