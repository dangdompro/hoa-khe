console.log("JS connected");

// =========================
// HOME ABOUT SLIDER
// =========================
const aboutSlider = document.querySelector(".home-about-slider");

if (aboutSlider) {
  const slides = aboutSlider.querySelectorAll(".home-about-slide");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));

    slides[index].classList.add("active");

    current = index;
  }

  function nextSlide() {
    let next = current + 1;

    if (next >= slides.length) next = 0;

    showSlide(next);
  }

  setInterval(nextSlide, 5000);
  showSlide(0);
}

// ============================
// HOME PROJECT SLIDER
// ============================

const projectSlider = document.querySelector(".home-project-slider");

if (projectSlider) {
  const slides = projectSlider.querySelectorAll(".home-project-slide");
  const dots = document.querySelectorAll(".project-dot");

  let current = 0;

  function showProjectSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
  }

  function nextProjectSlide() {
    let next = current + 1;

    if (next >= slides.length) next = 0;

    showProjectSlide(next);
  }

  setInterval(nextProjectSlide, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showProjectSlide(index);
    });
  });

  showProjectSlide(0);
}
