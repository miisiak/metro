let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides(n) {
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active-slide');
        slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    slides[slideIndex].classList.add('active-slide');
}

document.querySelector('.prev').addEventListener('click', () => showSlides(-1));
document.querySelector('.next').addEventListener('click', () => showSlides(1));

showSlides(0); // Initialize first slide
