document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menuContainer = document.querySelector(".menu-container");

    // Abrir/fechar o menu ao clicar no ícone de hamburguer
    hamburger.addEventListener("click", function () {
        menuContainer.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menuContainer.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            menuContainer.classList.remove("active");
        }
    });
});