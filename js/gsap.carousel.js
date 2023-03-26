const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const dots = carousel.querySelectorAll(".dot");
let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;
let startX = null;
let currentX = null;

function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + "px";
}

function setupSlides() {
  slides.forEach(setSlidePosition);
}

function showSlide(index) {
   if (index < 0) {
     index = slides.length - 1;
   } else if (index >= slides.length) {
     index = 0;
   }
   const slide = slides[index];
   gsap.to(".slides", { duration: 0.5, x: -slideWidth * index, ease: "power2.inOut" });
   currentIndex = index;
   updateDots();
 }

function setupDots() {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function handleSwipeStart(event) {
  startX = event.clientX || event.touches[0].clientX;
  currentX = startX;
}

function handleSwipeMove(event) {
  if (startX === null) {
    return;
  }
  currentX = event.clientX || event.touches[0].clientX;
  const diffX = currentX - startX;
  gsap.set(".slides", { x: -slideWidth * currentIndex + diffX });
}

function handleSwipeEnd() {
  const diffX = currentX - startX;
  if (diffX > slideWidth * 0.1) {
    showSlide(currentIndex - 1);
  } else if (diffX < -slideWidth * 0.1) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(currentIndex);
  }
  startX = null;
  currentX = null;
}

function resize() {
  slideWidth = slides[0].getBoundingClientRect().width;
  setupSlides();
  showSlide(currentIndex);
}

function init() {
  setupSlides();
  setupDots();
  updateDots();
  window.addEventListener("resize", resize);
  carousel.addEventListener("mousedown", handleSwipeStart);
  carousel.addEventListener("mousemove", handleSwipeMove);
  carousel.addEventListener("mouseup", handleSwipeEnd);
  carousel.addEventListener("touchstart", handleSwipeStart);
  carousel.addEventListener("touchmove", handleSwipeMove);
  carousel.addEventListener("touchend", handleSwipeEnd);
}

init();
