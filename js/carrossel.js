const container = document.querySelector('.container-slide');
const slides = document.querySelectorAll('.container-slide img');
const slideWidth = slides[0].clientWidth; // Largura de cada slide
let counter = 0;

function nextSlide() {
    if (counter < slides.length - 1) {
        counter++;
    } else {
        counter = 0;
    }

    container.style.transform = `translateX(-${slideWidth * counter}px)`;
}

setInterval(nextSlide, 3200); // Altere o intervalo conforme necessário
