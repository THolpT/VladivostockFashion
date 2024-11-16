let currentIndex = 0;

function toggleMenu() {
  const menu = document.getElementById("center-header");
  menu.classList.toggle("open");
}

function handlePrevClick() {
  const track = document.getElementById("carousel-track");
  currentIndex = (currentIndex === 0) ? track.children.length - 1 : currentIndex - 1;
  updateCarousel();
}

function handleNextClick() {
  const track = document.getElementById("carousel-track");
  currentIndex = (currentIndex === track.children.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}

function setSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById("carousel-track");
  track.style.transform = `translateX(-${currentIndex * (window.innerWidth <= 680 ? 65 : 33)}%)`;
  document.querySelectorAll(".slider-li").forEach((li, index) => {
    li.classList.toggle("active-slider", index === currentIndex);
  });
}
