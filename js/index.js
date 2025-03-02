let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

// Exibir o slide inicial
function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === n) {
            slide.classList.add("active");
        }
    });
}

// Navegação entre os slides
function changeSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

// Alternância automática
setInterval(() => changeSlide(1), 4000);

// Inicializa o primeiro slide
showSlide(slideIndex);