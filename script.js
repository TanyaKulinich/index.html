document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.getElementById("navbar-toggler");
    const menu = document.getElementById("navbar-menu");

    toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});