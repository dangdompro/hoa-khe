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

// =========================
// HOME PROJECT SLIDER FINAL
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".home-project-slide");
  const infos = document.querySelectorAll(".home-project-info");
  const dots = document.querySelectorAll(".home-project-dot");

  let currentIndex = 0;
  let interval;

  // ===== INIT (đảm bảo có active ban đầu) =====
  function init() {
    slides.forEach((s) => s.classList.remove("active"));
    infos.forEach((i) => i.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[0].classList.add("active");
    infos[0].classList.add("active");
    dots[0].classList.add("active");
  }

  // ===== SHOW =====
  function showSlide(index) {
    slides.forEach((s) => s.classList.remove("active"));
    infos.forEach((i) => i.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[index].classList.add("active");
    infos[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  // ===== AUTO =====
  function startAuto() {
    interval = setInterval(() => {
      let next = currentIndex + 1;
      if (next >= slides.length) next = 0;
      showSlide(next);
    }, 5000);
  }

  // ===== CLICK DOT =====
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);

      clearInterval(interval);
      startAuto();
    });
  });

  // ===== RUN =====
  init();
  startAuto();
});

/* =========================
   HANDLE PORTAL LOGIN
========================= */

function handlePortalLogin(e) {
  e.preventDefault();

  const form = e.target;

  const id = form.querySelector('input[name="id"]').value.trim();
  const password = form.querySelector('input[name="password"]').value.trim();

  // kiểm tra cơ bản
  if (!id || !password) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  // fake login thành công → chuyển trang
  window.location.href = "/app/";
}

// gắn sự kiện
document
  .querySelector(".portal-form")
  .addEventListener("submit", handlePortalLogin);
