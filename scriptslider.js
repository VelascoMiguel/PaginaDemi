const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const totalSlides = slides.length;
const slideInterval = 3000;
const slideWidth = slider.clientWidth;

let slideIndex = 0;
let slideIntervalId;

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

function startSlide() {
  slideIntervalId = setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide();
  }, slideInterval);
}

function stopSlide() {
  clearInterval(slideIntervalId);
}

prevArrow.addEventListener("click", () => {
  stopSlide();
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
  startSlide();
});

nextArrow.addEventListener("click", () => {
  stopSlide();
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide();
  startSlide();
});

showSlide();
startSlide();

