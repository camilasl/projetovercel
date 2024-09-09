const hamburger = document.getElementById("menuJs");
hamburger.addEventListener('click', abreFechaMenu);

function abreFechaMenu(){
    const navBar = document.getElementById("menu");
    const nav = document.getElementById("nav");
    navBar.classList.toggle("active");
    nav.classList.toggle("fixed");
}