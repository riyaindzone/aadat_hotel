// Scroll to Top Button Script
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
  threshold: 0.1, // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const target = entry.target;

    if (entry.isIntersecting) {
      // Specific logic for Gallery items (staggered drop-in)
      if (target.classList.contains("gallery-item")) {
        setTimeout(() => {
          target.classList.add("animate");
          // Use drop-in keyframes for gallery items
          target.style.animation = `drop-in 0.8s ease-out forwards`;
        }, parseFloat(target.style.animationDelay) * 1000);
      }
      // General logic for all other animated elements (fade-in-up/left/right)
      else {
        target.classList.add("animate");
      }
    } else {
      // Reset animation when scrolling away (for repeated effect)
      if (entry.boundingClientRect.top > window.innerHeight) {
        target.classList.remove("animate");
        // Reset animation property if it was set explicitly
        if (target.classList.contains("gallery-item")) {
          target.style.animation = "none";
        }
        // Re-observe the element so it animates when it comes back into view
        observer.observe(target);
      }
    }
  });
}, observerOptions);

// Attach observer to all elements with 'anim-target' class
document.querySelectorAll(".anim-target").forEach((element) => {
  element.classList.remove("animate"); // Ensure clean state before observing
  observer.observe(element);
});
