const scrollUpBtn = document.querySelector(".scroll-up-btn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollUpBtn.classList.add("visible");
  } else {
    scrollUpBtn.classList.remove("visible");
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// --- Intersection Observer for Scroll Animations ---
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add("animate");
    } else {
      if (entry.boundingClientRect.top > window.innerHeight) {
        target.classList.remove("animate");
        observer.observe(target);
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".anim-target").forEach((element) => {
  element.classList.remove("animate");
  observer.observe(element);
});
