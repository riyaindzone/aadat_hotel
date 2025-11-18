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
